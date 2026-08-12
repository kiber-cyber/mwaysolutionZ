/**
 * Email sending via Resend — the only provider this project uses.
 *
 * RESEND_API_KEY is the exact env var name Vercel's Resend integration
 * creates automatically (Vercel dashboard -> Integrations -> Resend). Since
 * you've already connected that integration, the key should already be set
 * in Production -- verify under Project Settings -> Environment Variables
 * rather than re-adding it.
 */
import { Resend } from "resend";

export type EmailAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

export type SendEmailInput = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
};

let resendClient: Resend | null = null;

function getClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("[email] RESEND_API_KEY is not set.");
  }
  if (!resendClient) resendClient = new Resend(apiKey);
  return resendClient;
}

export async function sendEmail(input: SendEmailInput): Promise<void> {
  const from = process.env.EMAIL_FROM || "MWAY Solutions <info@mwaysolutions.net>";
  const resend = getClient();

  const { error } = await resend.emails.send({
    from,
    to: input.to,
    subject: input.subject,
    text: input.text,
    html: input.html,
    replyTo: input.replyTo,
    attachments: input.attachments?.map((a) => ({
      filename: a.filename,
      content: a.content,
    })),
  });

  if (error) {
    // Never leak Resend's raw error to the client -- log it, throw a generic
    // error the API route turns into a clean user-facing message.
    console.error("[email] Resend send failed:", error);
    throw new Error("Email send failed.");
  }
}
