import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse equipment and products available for commercial, institutional and project-based requirements from MWAY Solutions.",
  alternates: { canonical: "https://mwaysolutions.net/products" },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1A1D22] font-sans">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0E1B2B] text-white">
        <div className="absolute inset-0 grid-lines" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
          <div className="text-xs font-medium tracking-widest text-[#3E6B8A] mb-4">CATALOG</div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
            Products
          </h1>
          <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
            Equipment and products for commercial, institutional and project-based
            requirements. This is a working catalog, not a shop — every item is
            available to request, not purchase online.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <h2 className="font-display text-2xl font-semibold mb-8">Browse by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1D22]/10 border border-[#1A1D22]/10">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="bg-white p-6 hover:bg-[#F6F5F1] transition-colors">
              <h3 className="font-display text-sm font-semibold mb-1">{cat.name}</h3>
              <p className="text-xs text-[#1A1D22]/45">{cat.nameKa}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="bg-white border-y border-[#1A1D22]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <h2 className="font-display text-2xl font-semibold mb-2">Selected Products</h2>
          <p className="text-[#1A1D22]/60 mb-12 max-w-xl">
            A curated showcase — not the full catalog. Tell us what you need and we&apos;ll
            confirm availability and specifications.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => {
              const category = CATEGORIES.find((c) => c.slug === p.category);
              return (
                <div key={p.slug} className="group border border-[#1A1D22]/12 bg-[#F6F5F1] flex flex-col">
                  <div className="aspect-[4/3] bg-[#0E1B2B] relative overflow-hidden grid-lines flex items-center justify-center">
                    <span className="text-white/25 text-[11px] tracking-widest font-display">SPEC IMAGE</span>
                    <div className="reg-mark text-white/20 top-3 left-3" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[11px] tracking-widest text-[#3E6B8A] mb-2">
                      {category?.name.toUpperCase() ?? p.category.toUpperCase()}
                    </span>
                    <h3 className="font-display text-base font-semibold mb-2">{p.name}</h3>
                    <p className="text-sm text-[#1A1D22]/60 leading-relaxed mb-5 flex-1">{p.description}</p>
                    <a
                      href={`/request-solution?product=${encodeURIComponent(p.name)}`}
                      className="text-xs font-semibold bg-[#C08A3E] hover:bg-[#a8752f] text-white text-center py-2.5 transition-colors"
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

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
          Don&apos;t see what you need?
        </h2>
        <p className="text-[#1A1D22]/65 max-w-lg mx-auto mb-8 leading-relaxed">
          Our catalog covers common equipment categories, but most projects need something
          more specific. Tell us the requirement directly.
        </p>
        <a
          href="/request-solution"
          className="inline-flex items-center gap-2 bg-[#C08A3E] hover:bg-[#a8752f] text-white font-semibold px-8 py-4 rounded-sm transition-colors"
        >
          Request a Solution <ArrowRight size={16} />
        </a>
      </section>

      <Footer />
    </div>
  );
}
