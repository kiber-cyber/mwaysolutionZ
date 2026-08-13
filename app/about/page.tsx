// app/about/page.tsx
import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n/server";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { ArrowRight } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = dictionaries[locale];
  return {
    title: dict.about.meta.title,
    description: dict.about.meta.description,
    alternates: { canonical: "https://mwaysolutions.net/about" },
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const dict = dictionaries[locale];
  const about = dict.about;

  // Convert markdown-like bold to HTML and line breaks to <br />
  const formatContent = (text: string) => {
    // Convert **bold** to <strong>
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Convert newlines to <br />
    html = html.replace(/\n/g, '<br />');
    return html;
  };

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1A1D22] font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0E1B2B] text-white">
        <div className="absolute inset-0 grid-lines" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
          <div className="text-xs font-medium tracking-widest text-[#3E6B8A] mb-4">
            {about.hero.eyebrow}
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
            {about.hero.heading}
          </h1>
          <p className="mt-3 text-white/70 text-lg max-w-xl">
            {about.hero.subheading}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <div
          className="text-lg text-[#1A1D22]/80 leading-relaxed prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: formatContent(about.content) }}
        />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
          {about.cta.title}
        </h2>
        <p className="text-[#1A1D22]/65 max-w-lg mx-auto mb-8 leading-relaxed">
          {about.cta.subtitle}
        </p>
        <a
          href="/request-solution"
          className="inline-flex items-center gap-2 bg-[#C08A3E] hover:bg-[#a8752f] text-white font-semibold px-8 py-4 rounded-sm transition-colors"
        >
          {about.cta.button} <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}