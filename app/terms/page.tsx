// app/terms/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MWAY Solutions",
  description: "Terms and conditions for using MWAY Solutions services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1A1D22] font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <h1 className="font-display text-4xl font-semibold mb-8 text-[#0E1B2B]">Terms of Service</h1>
        <p className="text-gray-600">Last updated: August 2026</p>
        <div className="mt-8 space-y-6 text-gray-700">
          <p>[Placeholder for Terms of Service content]</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}