// app/contact/page.tsx
import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n/server";
import { dictionaries } from "@/lib/i18n/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1A1D22] font-sans">
      <Navbar />

      <section className="bg-[#0E1B2B] text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 text-center">
          <div className="flex justify-center mb-6">
            <LanguageSwitcher currentLocale={locale} />
          </div>
          <div className="text-xs font-medium tracking-widest text-[#C08A3E] mb-4">
            {dict.contact.page.eyebrow}
          </div>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
            {dict.contact.page.heading}
          </h1>
          <p
            className="text-white/65 leading-relaxed max-w-xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: dict.contact.page.intro.replace(
                "Request a Solution",
                `<a href="/request-solution" class="text-[#C08A3E] font-semibold underline underline-offset-2">Request a Solution</a>`
              ),
            }}
          />
        </div>
      </section>

      <div className="px-6 lg:px-10 py-20">
        <ContactForm locale={locale} dict={dict.contact} />
      </div>

      <Footer />
    </div>
  );
}