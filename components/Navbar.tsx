"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV } from "@/lib/nav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, LOCALES, Locale } from "@/lib/i18n/config";

function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${LOCALE_COOKIE}=`));
    const value = cookie ? cookie.split("=")[1] : "en";
    if (LOCALES.includes(value as Locale)) {
      setLocale(value as Locale);
    } else {
      setLocale("en");
    }
  }, []);

  return locale;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/mway-mark.svg"
            alt="MWAY Solutions"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="font-display text-xl font-bold tracking-tight text-navy">
            MWAY <span className="text-bronze">SOLUTIONS</span>
          </span>
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
                    ? "text-navy font-bold"
                    : "text-navy/70 hover:text-navy"
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
            className="bg-bronze hover:bg-bronze/80 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
          >
            Request a Solution
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-navy/10 bg-paper px-6 py-4 flex flex-col gap-4">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-navy">
              {item.label}
            </a>
          ))}
          <a
            href="/request-solution"
            className="bg-bronze text-white text-sm font-semibold px-5 py-3 rounded-sm text-center mt-2"
          >
            Request a Solution
          </a>
        </div>
      )}
    </header>
  );
}