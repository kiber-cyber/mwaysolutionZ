// app/products/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { getLocale } from "@/lib/i18n/server";
import { dictionaries } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = dictionaries[locale];
  return {
    title: dict.products.meta.title,
    description: dict.products.meta.description,
    alternates: { canonical: "https://mwaysolutions.net/products" },
  };
}

export default async function ProductsPage() {
  const locale = await getLocale();
  const dict = dictionaries[locale];
  const products = dict.products;

  return (
    <div className="min-h-screen bg-paper text-navy font-sans">
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 grid-lines" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
          <div className="text-xs font-medium tracking-widest text-bronze mb-4">
            {products.hero.eyebrow}
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
            {products.hero.heading}
          </h1>
          <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
            {products.hero.intro}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <h2 className="font-display text-2xl font-semibold mb-8">{products.categories}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="bg-white p-6 hover:bg-paper transition-colors">
              <h3 className="font-display text-sm font-semibold mb-1">{cat.name}</h3>
              <p className="text-xs text-navy/45">{cat.nameKa}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-navy/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <h2 className="font-display text-2xl font-semibold mb-2">{products.selected}</h2>
          <p className="text-navy/60 mb-12 max-w-xl">{products.selectedIntro}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => {
              const category = CATEGORIES.find((c) => c.slug === p.category);
              return (
                <div key={p.slug} className="group border border-navy/12 bg-paper flex flex-col">
                  <div className="aspect-[4/3] bg-navy relative overflow-hidden grid-lines flex items-center justify-center">
                    <span className="text-white/25 text-[11px] tracking-widest font-display">SPEC IMAGE</span>
                    <div className="reg-mark text-white/20 top-3 left-3" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[11px] tracking-widest text-bronze mb-2">
                      {category?.name.toUpperCase() ?? p.category.toUpperCase()}
                    </span>
                    <h3 className="font-display text-base font-semibold mb-2">{p.name}</h3>
                    <p className="text-sm text-navy/60 leading-relaxed mb-5 flex-1">{p.description}</p>
                    <a
                      href={`/contact?subject=${encodeURIComponent("Product Inquiry: " + p.name)}`}
                      className="text-xs font-semibold bg-bronze hover:bg-bronze/80 text-white text-center py-2.5 transition-colors"
                    >
                      Request Information
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
          {products.cta.title}
        </h2>
        <p className="text-navy/65 max-w-lg mx-auto mb-8 leading-relaxed">
          {products.cta.subtitle}
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze/80 text-white font-semibold px-8 py-4 rounded-sm transition-colors"
        >
          {products.cta.button} <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}