// app/request-solution/page.tsx
import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n/server";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Mail, Copy } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = dictionaries[locale];
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: { canonical: "https://mwaysolutions.net/request-solution" },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: "https://mwaysolutions.net/request-solution",
      siteName: "MWAYSolutions",
    },
  };
}

export default async function RequestSolutionPage() {
  const locale = await getLocale();
  const dict = dictionaries[locale];

  const email = "info@mwaysolutions.net";

  // Template for the email body
  const emailTemplate = `Subject: Request for Solution – [Your Company Name]

Hello MWAY Solutions team,

I would like to request a solution for the following requirement:

Company / Organization: 
Contact Person: 
Email: 
Phone: 
Country / City: 
Organization Type: 

Project / Requirement Description: 
Products or Services of Interest: 
Estimated Quantity: 
Required Delivery Location: 
Required Delivery Date: 
Budget Range (optional): 

Additional Information: 

Please let me know if you need any further details.

Best regards,
[Your Name]
[Your Title]
[Your Phone Number]`;

  const mailtoLink = `mailto:${email}?subject=Request%20for%20Solution&body=${encodeURIComponent(emailTemplate)}`;

  // For copying the template to clipboard
  const copyTemplate = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailTemplate);
    }
  };

  return (
    <div className="min-h-screen bg-paper text-navy font-sans">
      <section className="bg-navy text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 text-center">
          <div className="flex justify-center mb-6">
            <LanguageSwitcher currentLocale={locale} />
          </div>
          <div className="text-xs font-medium tracking-widest text-bronze mb-4">
            {dict.page.eyebrow}
          </div>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
            {dict.page.heading}
          </h1>
          <p className="text-white/65 leading-relaxed max-w-xl mx-auto">
            {dict.page.intro}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <div className="bg-white p-8 rounded-sm shadow-sm border border-navy/10">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="text-bronze" size={24} />
            <h2 className="font-display text-xl font-semibold">Send us an email</h2>
          </div>
          <p className="text-navy/70 mb-6">
            Use the button below to open your email client with a pre‑filled template.
            Fill in the details and send – you can attach files directly in your email.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={mailtoLink}
              className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze/80 text-white font-semibold px-6 py-3 rounded-sm transition-colors"
            >
              <Mail size={18} />
              Open Email Client
            </a>

            <button
              onClick={copyTemplate}
              className="inline-flex items-center gap-2 border border-navy/20 hover:border-navy/40 text-navy font-medium px-6 py-3 rounded-sm transition-colors"
            >
              <Copy size={18} />
              Copy Template
            </button>
          </div>

          <div className="mt-8 border-t border-navy/10 pt-6">
            <h3 className="font-display text-sm font-semibold mb-3">Email template (copy and paste):</h3>
            <pre className="bg-paper p-4 rounded-sm text-sm text-navy/80 whitespace-pre-wrap overflow-x-auto font-mono leading-relaxed">
              {emailTemplate}
            </pre>
          </div>

          <div className="mt-6 text-sm text-navy/50">
            <p>You can also email us directly at: <a href={`mailto:${email}`} className="text-bronze hover:underline">{email}</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}