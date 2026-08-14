"use client";

import { LOCALE_COOKIE, LOCALES, Locale } from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  currentLocale?: Locale;
}

export function LanguageSwitcher({ currentLocale = "en" }: LanguageSwitcherProps) {
  const handleLanguageChange = (newLocale: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      {LOCALES.map((locale) => {
        const isActive = currentLocale === locale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleLanguageChange(locale)}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider transition-colors ${
              isActive
                ? "bg-navy text-white"
                : "text-navy/60 hover:text-navy hover:bg-navy/10"
            }`}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}