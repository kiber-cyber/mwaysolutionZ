// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MWAY Solutions",
  description: "Terms and conditions for using MWAY Solutions services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-paper text-navy font-sans flex flex-col">
      <main className="flex-grow max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <h1 className="font-display text-4xl font-semibold mb-8 text-navy">Terms of Service</h1>
        <p className="text-gray-600">Last updated: August 2026</p>

        <div className="mt-8 space-y-6 text-navy/80 leading-relaxed">
          <p>
            <strong>1. Acceptance of Terms</strong><br />
            By using this website, you agree to these terms. If you do not agree, please do not use the site.
          </p>
          <p>
            <strong>2. Information Provided</strong><br />
            All content on this website is for informational purposes only. Product descriptions, specifications, and availability are subject to change without notice.
          </p>
          <p>
            <strong>3. No Online Transactions</strong><br />
            This website is not an e‑commerce platform. No purchases can be made online. All product inquiries and orders are handled via email or phone.
          </p>
          <p>
            <strong>4. Intellectual Property</strong><br />
            All content, including text, graphics, logos, and images, is the property of MWAY Solutions and is protected by applicable copyright and trademark laws.
          </p>
          <p>
            <strong>5. External Links</strong><br />
            This website may contain links to third‑party sites. We are not responsible for their content or privacy practices.
          </p>
          <p>
            <strong>6. Disclaimer</strong><br />
            MWAY Solutions provides information "as is" without warranties of any kind. We strive for accuracy but do not guarantee that all information is current or error‑free.
          </p>
          <p>
            <strong>7. Governing Law</strong><br />
            These terms are governed by the laws of Georgia.
          </p>
          <p>
            <strong>8. Contact</strong><br />
            If you have questions, please contact us at <a href="mailto:info@mwaysolutions.net" className="text-bronze hover:underline">info@mwaysolutions.net</a>.
          </p>
        </div>
      </main>
    </div>
  );
}