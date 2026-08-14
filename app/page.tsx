// app/page.tsx
import {
  Package,
  Ruler,
  LifeBuoy,
  ClipboardList,
  Settings2,
  ArrowRight,
  Truck,
  ShieldCheck,
  Building2,
} from "lucide-react";

const CAPABILITIES = [
  { icon: Package, title: "Supply", desc: "Professional equipment and products sourced according to project and operational requirements.", ref: "CAP-01" },
  { icon: Ruler, title: "Design & Build", desc: "Custom solutions designed around the customer's facility, workflow and technical requirements.", ref: "CAP-02" },
  { icon: Truck, title: "Installation", desc: "Delivery, installation, configuration and commissioning.", ref: "CAP-03" },
  { icon: LifeBuoy, title: "Service & Maintenance", desc: "Technical support, spare parts, maintenance and after-sales service.", ref: "CAP-04" },
  { icon: ClipboardList, title: "Procurement", desc: "Sourcing and procurement support for commercial and institutional requirements.", ref: "CAP-05" },
  { icon: Settings2, title: "Custom Solutions", desc: "Tailored products, equipment and technical solutions for specific operational needs.", ref: "CAP-06" },
];

const PRODUCTS = [
  { category: "Ovens", name: "Professional Convection Oven", desc: "Precision heat distribution for high-volume commercial kitchens." },
  { category: "Coffee Equipment", name: "Professional Coffee Machine", desc: "Commercial-grade extraction systems for hospitality operations." },
  { category: "Refrigeration", name: "Commercial Refrigerator", desc: "Reliable cold-chain equipment for foodservice and institutional use." },
  { category: "Mixers", name: "Planetary Mixer", desc: "Heavy-duty mixing for bakery and industrial food production." },
  { category: "Dishwashing", name: "Commercial Dishwasher", desc: "High-throughput washing systems built for continuous service." },
  { category: "Shawarma Equipment", name: "Shawarma Machine", desc: "Vertical grill systems for fast-food and QSR operations." },
  { category: "Kitchen Furniture", name: "Stainless Steel Work Table", desc: "Durable, hygienic workstations for professional kitchens." },
  { category: "Packaging", name: "Vacuum Packaging Machine", desc: "Sealing and packaging equipment for food safety and shelf life." },
];

export default function Homepage() {
  return (
    <div className="min-h-screen bg-paper text-navy font-sans selection:bg-bronze selection:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 grid-lines" />
        <div className="reg-mark text-bronze/60 top-8 left-8" />
        <div className="reg-mark text-bronze/60 bottom-8 right-8" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-28 lg:pt-32 lg:pb-36">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-bronze border border-bronze/40 rounded-sm px-3 py-1.5 mb-8">
            DOC. REF: MWAY-SOL-2026 &nbsp;·&nbsp; EQUIPMENT · SERVICES · PROJECT SOLUTIONS
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] max-w-3xl">
            Integrated Solutions for Every Customer
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            We provide professional equipment, products, technical services and complete
            project solutions — for businesses, institutions, and any organization with
            equipment or project requirements.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/request-solution"
              className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze/80 text-white font-semibold px-6 py-3.5 rounded-sm transition-colors"
            >
              Request a Solution <ArrowRight size={16} />
            </a>
            <a
              href="/solutions"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-3.5 rounded-sm transition-colors"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs font-medium tracking-widest text-bronze mb-3">CAPABILITIES</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">What We Do</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10 border border-navy/10">
          {CAPABILITIES.map(({ icon: Icon, title, desc, ref }) => (
            <div key={title} className="bg-paper p-8 hover:bg-white transition-colors">
              <div className="flex items-center justify-between mb-6">
                <Icon size={26} strokeWidth={1.5} className="text-bronze" />
                <span className="text-[11px] tracking-widest text-navy/35">{ref}</span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-navy/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS PREVIEW */}
      <section className="bg-white border-y border-navy/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="text-xs font-medium tracking-widest text-bronze mb-3">SOLUTIONS</div>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold max-w-2xl mb-4">
            Solutions That Move Projects Forward
          </h2>
          <p className="text-navy/65 max-w-2xl mb-14 leading-relaxed">
            From equipment supply and procurement to installation, commissioning and ongoing
            technical support, we help organizations turn requirements into practical, reliable solutions.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border border-navy/12 p-10">
              <Building2 className="text-bronze mb-6" size={28} strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold mb-3">Equipment & Supply</h3>
              <ul className="text-sm text-navy/65 space-y-2 mb-8 leading-relaxed">
                <li>Restaurant &amp; hospitality equipment</li>
                <li>Commercial kitchen solutions</li>
                <li>Equipment supply &amp; installation</li>
                <li>Technical support &amp; maintenance</li>
              </ul>
              <a href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                View Solutions <ArrowRight size={14} />
              </a>
            </div>

            <div className="bg-navy text-white p-10">
              <ShieldCheck className="text-bronze mb-6" size={28} strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold mb-3">Projects & Procurement</h3>
              <ul className="text-sm text-white/65 space-y-2 mb-8 leading-relaxed">
                <li>Project-based equipment sourcing</li>
                <li>Institutional &amp; facility supply</li>
                <li>Technical documentation support</li>
                <li>End-to-end project delivery</li>
              </ul>
              <a href="/request-solution" className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                Submit a Requirement <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="text-xs font-medium tracking-widest text-bronze mb-3">CATALOG</div>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">Selected Products</h2>
        <p className="text-navy/65 max-w-2xl mb-14 leading-relaxed">
          Explore equipment and products available for commercial, institutional and project-based requirements.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="group border border-navy/12 bg-white flex flex-col">
              <div className="aspect-[4/3] bg-navy relative overflow-hidden grid-lines flex items-center justify-center">
                <span className="text-white/25 text-[11px] tracking-widest font-display">SPEC IMAGE</span>
                <div className="reg-mark text-white/20 top-3 left-3" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[11px] tracking-widest text-bronze mb-2">{p.category.toUpperCase()}</span>
                <h3 className="font-display text-base font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-navy/60 leading-relaxed mb-5 flex-1">{p.desc}</p>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-xs font-semibold border border-navy/20 text-center py-2.5 hover:border-navy/40 transition-colors">
                    View Details
                  </a>
                  <a href="#" className="text-xs font-semibold bg-bronze hover:bg-bronze/80 text-white text-center py-2.5 transition-colors">
                    Request Information
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
            View All Products <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28 text-center">
        <div className="text-xs font-medium tracking-widest text-bronze mb-4">GET STARTED</div>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6 max-w-2xl mx-auto">
          Have a Requirement?
        </h2>
        <p className="text-navy/65 max-w-xl mx-auto mb-10 leading-relaxed">
          Tell us what you need. Our team will review your requirements and help identify the right solution.
        </p>
        <a
          href="/request-solution"
          className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze/80 text-white font-semibold px-8 py-4 rounded-sm transition-colors"
        >
          Submit Your Requirement <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}