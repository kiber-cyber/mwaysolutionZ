// app/about/page.tsx
import type { Metadata } from "next";
import { ArrowRight, Package, Ruler, Truck, LifeBuoy, ClipboardList, Settings2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "MWAY Solutions provides equipment, procurement and project solutions for businesses and institutions.",
  alternates: { canonical: "https://mwaysolutions.net/about" },
};

const FOCUS_AREAS = [
  { icon: Package, title: "Equipment Supply", desc: "Sourcing professional equipment and products to match project and operational requirements." },
  { icon: Ruler, title: "Custom Solutions", desc: "Designing around a customer's facility, workflow and technical requirements rather than a fixed catalog." },
  { icon: Truck, title: "Installation", desc: "Delivery, installation, configuration and commissioning handled directly." },
  { icon: LifeBuoy, title: "Long-Term Support", desc: "Technical support, spare parts and maintenance after the project is delivered." },
  { icon: ClipboardList, title: "Procurement", desc: "Sourcing and procurement support for commercial and institutional requirements." },
  { icon: Settings2, title: "Project Implementation", desc: "Coordinating supply, installation and commissioning as a single accountable process." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1A1D22] font-sans">
      <section className="relative overflow-hidden bg-[#0E1B2B] text-white">
        <div className="absolute inset-0 grid-lines" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
          <div className="text-xs font-medium tracking-widest text-[#3E6B8A] mb-4">ABOUT</div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
            About MWAY Solutions
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <p className="text-lg text-[#1A1D22]/75 leading-relaxed mb-6">
          MWAY Solutions provides equipment, products, technical services and complete
          project solutions to businesses and institutions in Georgia — spanning supply,
          custom design, installation, procurement support and long-term maintenance.
        </p>
        <p className="text-[#1A1D22]/65 leading-relaxed">
          Rather than operating as a standard retailer, we work from the requirement
          backward: understanding what a facility or project actually needs, sourcing or
          designing the right equipment, and staying involved through installation,
          commissioning and ongoing support.
        </p>
      </section>

      <section className="bg-white border-y border-[#1A1D22]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <h2 className="font-display text-2xl font-semibold mb-10">What We Focus On</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1D22]/10 border border-[#1A1D22]/10">
            {FOCUS_AREAS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#F6F5F1] p-8">
                <Icon size={24} strokeWidth={1.5} className="text-[#3E6B8A] mb-5" />
                <h3 className="font-display text-base font-semibold mb-2">{title}</h3>
                <p className="text-sm text-[#1A1D22]/65 leading-relaxed">{desc}</p>
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
    </div>
  );
}