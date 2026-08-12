import { NextRequest, NextResponse } from "next/server";
import { requestSolutionSchema, ALLOWED_FILE_TYPES, MAX_FILE_SIZE_BYTES, MAX_TOTAL_ATTACHMENT_BYTES } from "@/lib/validation";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { sendEmail, EmailAttachment } from "@/lib/email";
import { internalNotificationEmail, customerConfirmationEmail } from "@/lib/email-templates";

// Needs the Node runtime, not Edge — Buffer usage below for attachments.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);

  // 1. Rate limit
  const { allowed, retryAfterSeconds } = rateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: retryAfterSeconds ? { "Retry-After": String(retryAfterSeconds) } : undefined }
    );
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  // 2. Honeypot — bail out quietly (pretend success) so bots don't learn anything
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // 3. Parse + validate text fields
  const raw = Object.fromEntries(
    Array.from(formData.entries()).filter(([, v]) => typeof v === "string")
  );

  const parsed = requestSolutionSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }
  const data = parsed.data;

  // 4. Turnstile verification (server-side, never trust the client token alone)
  const turnstileOk = await verifyTurnstile(data.turnstileToken, ip);
  if (!turnstileOk) {
    return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 400 });
  }

  // 5. Validate + collect file attachments (never trust client-side checks alone)
  const incomingFiles = formData.getAll("attachments").filter((f): f is File => f instanceof File);

  let totalSize = 0;
  const attachments: EmailAttachment[] = [];

  for (const file of incomingFiles) {
    if (!(ALLOWED_FILE_TYPES as readonly string[]).includes(file.type)) {
      return NextResponse.json({ error: `File type not allowed: ${file.name}` }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json({ error: `File too large: ${file.name}` }, { status: 400 });
    }
    totalSize += file.size;
    if (totalSize > MAX_TOTAL_ATTACHMENT_BYTES) {
      return NextResponse.json({ error: "Total attachment size exceeds limit." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name, content: buffer, contentType: file.type });
  }

  // 6. Send internal notification + customer confirmation
  const emailTo = process.env.EMAIL_TO || "info@mwaysolutions.net";

  try {
    const internal = internalNotificationEmail(data, attachments.map((a) => a.filename));
    await sendEmail({
      to: emailTo,
      subject: internal.subject,
      text: internal.text,
      replyTo: data.email,
      attachments,
    });

    const confirmation = customerConfirmationEmail(data);
    await sendEmail({
      to: data.email,
      subject: confirmation.subject,
      text: confirmation.text,
    });
  } catch (err) {
    console.error("[api/request] email send failed:", err);
    return NextResponse.json(
      { error: "We could not send your request right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
