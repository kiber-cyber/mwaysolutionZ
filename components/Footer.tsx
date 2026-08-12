"use client";

import { useState } from "react";
import { NAV } from "@/lib/nav";

export default function Footer() {
  const [lang, setLang] = useState<"EN" | "GE">("EN");

  return (
    <footer className="bg-[#1A1D22] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-lg font-bold text-white mb-3">
            MWAY <span className="text-[#3E6B8A]">SOLUTIONS</span>
          </div>
          <p className="text-sm leading-relaxed">Integrated Solutions for Every Customer</p>
        </div>

        <div>
          <h4 className="text-xs tracking-widest text-white/40 mb-4">NAVIGATE</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest text-white/40 mb-4">GET IN TOUCH</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:info@mwaysolutions.net" className="hover:text-white transition-colors">info@mwaysolutions.net</a></li>
            <li>mwaysolutions.net</li>
            <li>
              <a href="/request-solution" className="inline-block mt-2 text-[#C08A3E] font-semibold hover:text-[#d99a4c] transition-colors">
                Request a Solution →
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest text-white/40 mb-4">LANGUAGE</h4>
          <div className="flex gap-2 text-sm">
            <button onClick={() => setLang("EN")} className={lang === "EN" ? "text-white font-semibold" : ""}>EN</button>
            <span>|</span>
            <button onClick={() => setLang("GE")} className={lang === "GE" ? "text-white font-semibold" : ""}>GE</button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap gap-4 justify-between text-xs text-white/40">
          <span>© {new Date().getFullYear()} MWAY Solutions. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white/70">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/70">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
