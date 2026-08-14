// app/contact/page.tsx
import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getLocale } from "@/lib/i18n/server";
import { dictionaries } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = dictionaries[locale];
  return {
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
    alternates: { canonical: "https://mwaysolutions.net/contact" },
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const dict = dictionaries[locale];

  const email = "info@mwaysolutions.net";
  const phone = "+995 555 555 555";
  const address = "Tbilisi, Georgia";

  const mailtoLink = `mailto:${email}?subject=Inquiry%20from%20mwaysolutions.net&body=Hello%20MWAY%20Solutions%2C%0A%0A`;

  return (
    <div className="min-h-screen bg-paper text-navy font-sans">
      <section className="bg-navy text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 text-center">
          <div className="flex justify-center mb-6">
            <LanguageSwitcher currentLocale={locale} />
          </div>
          <div className="text-xs font-medium tracking-widest text-bronze mb-4">
            {dict.contact.page.eyebrow}
          </div>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
            {dict.contact.page.heading}
          </h1>
          <p className="text-white/65 leading-relaxed max-w-xl mx-auto">
            {dict.contact.page.intro.replace(/<[^>]*>/g, "")}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-navy/10 text-center">
            <Mail className="mx-auto mb-4 text-bronze" size={36} strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold mb-2">Email</h3>
            <a
              href={mailtoLink}
              className="text-navy/70 hover:text-bronze transition-colors break-all"
            >
              {email}
            </a>
            <p className="text-sm text-navy/50 mt-2">Click to open your email client</p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-navy/10 text-center">
            <Phone className="mx-auto mb-4 text-bronze" size={36} strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold mb-2">Phone</h3>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-navy/70 hover:text-bronze transition-colors"
            >
              {phone}
            </a>
            <p className="text-sm text-navy/50 mt-2">Mon–Fri, 09:00 – 18:00</p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-navy/10 text-center">
            <MapPin className="mx-auto mb-4 text-bronze" size={36} strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold mb-2">Address</h3>
            <p className="text-navy/70">{address}</p>
            <p className="text-sm text-navy/50 mt-2">Georgia</p>
          </div>
        </div>
      </section>
    </div>
  );
}