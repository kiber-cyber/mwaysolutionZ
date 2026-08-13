// components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/nav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n/dictionaries";

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#F6F5F1]/95 backdrop-blur border-b border-[#1A1D22]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold tracking-tight text-[#1A1D22]">
          MWAY <span className="text-[#3E6B8A]">SOLUTIONS</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#0E1B2B] font-bold"
                    : "text-[#1A1D22]/70 hover:text-[#0E1B2B]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitcher currentLocale={locale} />
          <a
            href="/request-solution"
            className="bg-[#C08A3E] hover:bg-[#a8752f] text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
          >
            Request a Solution
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-[#1A1D22]/10 bg-[#F6F5F1] px-6 py-4 flex flex-col gap-4">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-[#1A1D22]">
              {item.label}
            </a>
          ))}
          <a
            href="/request-solution"
            className="bg-[#C08A3E] text-white text-sm font-semibold px-5 py-3 rounded-sm text-center mt-2"
          >
            Request a Solution
          </a>
        </div>
      )}
    </header>
  );
}