import type { Metadata } from "next";
import { Suspense } from "react";
import RequestSolutionForm from "@/components/RequestSolutionForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getLocale } from "@/lib/i18n/server";
import { dictionaries } from "@/lib/i18n/dictionaries";

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

  return (
    <main className="bg-[#F6F5F1] min-h-screen">
      <section className="bg-[#0E1B2B] text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 text-center">
          <div className="flex justify-center mb-6">
            <LanguageSwitcher currentLocale={locale} />
          </div>
          <div className="text-xs font-medium tracking-widest text-[#C08A3E] mb-4">{dict.page.eyebrow}</div>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold mb-4">{dict.page.heading}</h1>
          <p className="text-white/65 leading-relaxed max-w-xl mx-auto">{dict.page.intro}</p>
        </div>
      </section>

      <div className="px-6 lg:px-10 py-20">
        <Suspense fallback={null}>
          <RequestSolutionForm locale={locale} />
        </Suspense>
      </div>
    </main>
  );
}