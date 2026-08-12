import { RequestSolutionInput, ContactInput } from "./validation";
import { dictionaries, Locale } from "./i18n/dictionaries";

export function internalNotificationEmail(data: RequestSolutionInput, attachmentNames: string[]) {
  const subject = `New Solution Request — MWAY Solutions (${data.company})`;

  const text = `New website request

Company: ${data.company}
Contact: ${data.contactPerson}
Email: ${data.email}
Phone: ${data.phone || "—"}
Country / City: ${data.country || "—"} / ${data.city || "—"}

Organization type: ${data.orgType}

Project: ${data.project}
Products / Services: ${data.productsOfInterest || "—"}
Quantity: ${data.quantity || "—"}
Delivery location: ${data.deliveryLocation || "—"}
Required date: ${data.deliveryDate || "—"}
Budget range: ${data.budgetRange || "—"}

Message:
${data.additionalInfo || "—"}

Attachments: ${attachmentNames.length ? attachmentNames.join(", ") : "None"}

Submitted from: ${data.locale === "ka" ? "Georgian" : "English"} site version
`;

  return { subject, text };
}

export function contactNotificationEmail(data: ContactInput, attachmentNames: string[]) {
  const subject = `New Contact Message — MWAY Solutions (${data.name})`;

  const text = `New contact form message

Name: ${data.name}
Company: ${data.company || "—"}
Email: ${data.email}
Phone: ${data.phone || "—"}
Subject: ${data.subject || "—"}

Message:
${data.message}

Attachments: ${attachmentNames.length ? attachmentNames.join(", ") : "None"}

Submitted from: ${data.locale === "ka" ? "Georgian" : "English"} site version
`;

  return { subject, text };
}

export function contactConfirmationEmail(data: ContactInput) {
  const subject =
    data.locale === "ka"
      ? "თქვენი შეტყობინება მიღებულია — MWAY Solutions"
      : "We've received your message — MWAY Solutions";

  const text =
    data.locale === "ka"
      ? `მადლობთ, რომ დაუკავშირდით MWAY Solutions-ს.

თქვენი შეტყობინება მიღებულია. ჩვენი გუნდი მალე დაგიკავშირდებათ.

MWAY Solutions
info@mwaysolutions.net
mwaysolutions.net`
      : `Thank you for contacting MWAY Solutions.

We have received your message and will get back to you shortly.

MWAY Solutions
info@mwaysolutions.net
mwaysolutions.net`;

  return { subject, text };
}

export function customerConfirmationEmail(data: RequestSolutionInput) {
  const dict = dictionaries[data.locale as Locale] ?? dictionaries.en;

  const subject =
    data.locale === "ka"
      ? "თქვენი მოთხოვნა მიღებულია — MWAY Solutions"
      : "We've received your request — MWAY Solutions";

  const text =
    data.locale === "ka"
      ? `მადლობთ, რომ დაუკავშირდით MWAY Solutions-ს.

${dict.states.successBody}

MWAY Solutions
info@mwaysolutions.net
mwaysolutions.net`
      : `Thank you for contacting MWAY Solutions.

${dict.states.successBody}

MWAY Solutions
info@mwaysolutions.net
mwaysolutions.net`;

  return { subject, text };
}
