import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n/server";
import { dictionaries } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = dictionaries[locale];
  return {
    title: dict.terms.meta.title,
    description: dict.terms.meta.description,
  };
}

export default async function TermsPage() {
  const locale = await getLocale();
  const dict = dictionaries[locale];
  const terms = dict.terms;

  const formatContent = (text: string) => {
    let html = text
      .split('\n\n')
      .map((para) => {
        // Bold numbered sections
        if (/^\d\./.test(para)) {
          return `<p><strong>${para.split('\n')[0]}</strong><br />${para.split('\n').slice(1).join('<br />')}</p>`;
        }
        return `<p>${para.replace(/\n/g, '<br />')}</p>`;
      })
      .join('');
    return html;
  };

  return (
    <div className="min-h-screen bg-paper text-navy font-sans">
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 grid-lines" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
          <h1 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
            Terms of Service
          </h1>
        </div>
      </section>

      <main className="flex-grow max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <div
          className="text-navy/80 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: formatContent(terms.content) }}
        />
      </main>
    </div>
  );
}