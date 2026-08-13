// app/about/page.tsx
import type { Metadata } from "next";
import { ArrowRight, Package, Ruler, Truck, LifeBuoy, ClipboardList, Settings2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "MWAY Solutions provides equipment, procurement and project solutions for businesses and institutions.",
  alternates: { canonical: "https://mwaysolutions.net/about" },
};

// ... (the rest of your component)
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1A1D22] font-sans">
      <Navbar />   {/* NO prop */}
      {/* ... rest */}
    </div>
  );
}