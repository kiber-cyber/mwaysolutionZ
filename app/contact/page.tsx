// app/contact/page.tsx
import { Suspense } from "react";
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
      <Navbar />   {/* NO prop */}
      {/* ... rest unchanged */}
    </div>
  );
}