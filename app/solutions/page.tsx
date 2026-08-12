import type { Metadata } from "next";
import { ArrowRight, Package, Ruler, Truck, LifeBuoy, ClipboardList, Settings2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Equipment supply, custom design, installation, procurement and maintenance solutions from MWAY Solutions.",
  alternates: { canonical: "https://mwaysolutions.net/solutions" },
};

const CAPABILITIES = [
  { icon: Package, title: "Supply", desc: "Professional equipment and products sourced according to project and operational requirements." },
  { icon: Ruler, title: "Design & Build", desc: "Custom solutions designed around the customer's facility, workflow and technical requirements." },
  { icon: Truck, title: "Installation", desc: "Delivery, installation, configuration and commissioning." },
  { icon: LifeBuoy, title: "Service & Maintenance", desc: "Technical support, spare parts, maintenance and after-sales service." },
  { icon: ClipboardList, title: "Procurement", desc: "Sourcing and procurement support for commercial and institutional requirements." },
  { icon: Settings2, title: "Custom Solutions", desc: "Tailored products, equipment and technical solutions for specific operational needs." },
];

const SOLUTION_AREAS = [
  {
    title: "Hospitality & Food Service",
    desc: "Equipment and solutions for restaurants, cafés, hotels and catering operations.",
    items: [
      "Commercial kitchen equipment supply",
      "Kitchen design and layout support",
      "Installation and commissioning",
      "Ongoing maintenance and spare parts",
    ],
  },
  {
    title: "Institutional & Facility Solutions",
    desc: "Equipment and project support for schools, healthcare facilities and other institutions.",
    items: [
      "Institutional kitchen and facility equipment",
      "Technical documentation and specifications",
      "Phased or project-based delivery",
      "Long-term maintenance agreements",
    ],
  },
  {
    title: "Custom Project Solutions",
    desc: "Where standard equipment doesn't fit, we scope and source to the specific requirement.",
    items: [
      "Requirement scoping and sourcing",
      "Custom manufacturing coordination",
      "Multi-vendor project management",
      "Technical support through delivery",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1A1D22] font-sans">
      <Navbar />

      <section className="relative overflow-hidden bg-[#0E1B2B] text-white">
        <div className="absolute inset-0 grid-lines" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
          <div className="text-xs font-medium tracking-widest text-[#3E6B8A] mb-4">SOLUTIONS</div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
            Solutions That Move Projects Forward
          </h1>
          <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
            From equipment supply and procurement to installation, commissioning and ongoing
            technical support, we help organizations turn requirements into practical,
            reliable solutions.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <h2 className="font-display text-2xl font-semibold mb-10">What We Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1D22]/10 border border-[#1A1D22]/10">
          {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white p-8">
              <Icon size={24} strokeWidth={1.5} className="text-[#3E6B8A] mb-5" />
              <h3 className="font-display text-base font-semibold mb-2">{title}</h3>
              <p className="text-sm text-[#1A1D22]/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION AREAS */}
      <section className="bg-white border-y border-[#1A1D22]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <h2 className="font-display text-2xl font-semibold mb-10">Solution Areas</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {SOLUTION_AREAS.map((area) => (
              <div key={area.title} className="border border-[#1A1D22]/12 p-8 flex flex-col">
                <h3 className="font-display text-lg font-semibold mb-3">{area.title}</h3>
                <p className="text-sm text-[#1A1D22]/60 leading-relaxed mb-6">{area.desc}</p>
                <ul className="text-sm text-[#1A1D22]/70 space-y-2 mb-8 flex-1">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#C08A3E]">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/request-solution"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E1B2B]"
                >
                  Submit a Requirement <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 text-center">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
          Have a Requirement?
        </h2>
        <p className="text-[#1A1D22]/65 max-w-lg mx-auto mb-8 leading-relaxed">
          Tell us what you need. Our team will review your requirements and help identify
          the right solution.
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
