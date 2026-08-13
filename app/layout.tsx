// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getLocale } from "@/lib/i18n/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale(); // used only for <html lang>

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />   {/* NO prop */}
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}