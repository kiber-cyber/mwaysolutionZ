import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with MWAY Solutions.",
  alternates: { canonical: "https://mwaysolutions.net/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1A1D22] font-sans">
      <Navbar />

      <section className="bg-[#0E1B2B] text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 text-center">
          <div className="text-xs font-medium tracking-widest text-[#C08A3E] mb-4">CONTACT</div>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold mb-4">Get in Touch</h1>
          <p className="text-white/65 leading-relaxed max-w-xl mx-auto">
            Questions about a product, a project, or anything else — send us a message and
            we&apos;ll get back to you. For a specific project or procurement requirement, use{" "}
            <a href="/request-solution" className="text-[#C08A3E] font-semibold underline underline-offset-2">
              Request a Solution
            </a>{" "}
            instead — it captures the detail our team needs to respond properly.
          </p>
        </div>
      </section>

      <div className="px-6 lg:px-10 py-20">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
