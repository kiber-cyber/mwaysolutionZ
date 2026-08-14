// app/solutions/page.tsx
import type { Metadata } from "next";
import { ArrowRight, Package, Ruler, Truck, LifeBuoy, ClipboardList, Settings2 } from "lucide-react";
import { getLocale } from "@/lib/i18n/server";
import { dictionaries } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = dictionaries[locale];
  return {
    title: dict.solutions.meta.title,
    description: dict.solutions.meta.description,
    alternates: { canonical: "https://mwaysolutions.net/solutions" },
  };
}

const iconMap: Record<string, any> = {
  Supply: Package,
  "Design & Build": Ruler,
  Installation: Truck,
  "Service & Maintenance": LifeBuoy,
  Procurement: ClipboardList,
  "Custom Solutions": Settings2,
  // Georgian keys
  მიწოდება: Package,
  "დიზაინი და მშენებლობა": Ruler,
  ინსტალაცია: Truck,
  "მომსახურება და ტექნიკური მხარდაჭერა": LifeBuoy,
  შესყიდვები: ClipboardList,
  "ინდივიდუალური გადაწყვეტილებები": Settings2,
};

export default async function SolutionsPage() {
  const locale = await getLocale();
  const dict = dictionaries[locale];
  const solutions = dict.solutions;

  return (
    <div className="min-h-screen bg-paper text-navy font-sans">
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 grid-lines" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
          <div className="text-xs font-medium tracking-widest text-bronze mb-4">
            {solutions.hero.eyebrow}
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
            {solutions.hero.heading}
          </h1>
          <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
            {solutions.hero.intro}
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <h2 className="font-display text-2xl font-semibold mb-10">{solutions.capabilities}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10 border border-navy/10">
          {solutions.capabilitiesList.map((cap: any) => {
            const Icon = iconMap[cap.title] || Package;
            return (
              <div key={cap.title} className="bg-white p-8">
                <Icon size={24} strokeWidth={1.5} className="text-bronze mb-5" />
                <h3 className="font-display text-base font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-navy/65 leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SOLUTION AREAS */}
      <section className="bg-white border-y border-navy/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <h2 className="font-display text-2xl font-semibold mb-10">{solutions.areas}</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.areasList.map((area: any) => (
              <div key={area.title} className="border border-navy/12 p-8 flex flex-col">
                <h3 className="font-display text-lg font-semibold mb-3">{area.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed mb-6">{area.desc}</p>
                <ul className="text-sm text-navy/70 space-y-2 mb-8 flex-1">
                  {area.items.map((item: string) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-bronze">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy"
                >
                  Contact Us <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
          {solutions.cta.title}
        </h2>
        <p className="text-navy/65 max-w-lg mx-auto mb-8 leading-relaxed">
          {solutions.cta.subtitle}
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze/80 text-white font-semibold px-8 py-4 rounded-sm transition-colors"
        >
          {solutions.cta.button} <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}