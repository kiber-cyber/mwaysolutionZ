// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getLocale } from "@/lib/i18n/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: {
    default: "MWAY Solutions — Integrated Solutions for Every Customer",
    template: "%s | MWAY Solutions",
  },
  description:
    "MWAY Solutions provides professional equipment, products, technical services and complete project solutions for businesses, institutions and organizations.",
  metadataBase: new URL("https://mwaysolutions.net"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-kit/mway-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-kit/mway-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicon-kit/apple-touch-icon.png",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MWAY Solutions",
    "url": "https://mwaysolutions.net",
    "logo": "https://mwaysolutions.net/mway-logo-full.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@mwaysolutions.net",
      "contactType": "customer service"
    }
  };

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}