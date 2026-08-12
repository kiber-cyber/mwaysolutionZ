 "use client";

import { LOCALE_COOKIE, LOCALES, Locale } from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  currentLocale?: Locale;
}

export function LanguageSwitcher({ currentLocale = "en" }: LanguageSwitcherProps) {
  const handleLanguageChange = (newLocale: Locale) => {
    // Set the cookie directly in the browser
    document.cookie = `${LOCALE_COOKIE}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Reload the page so Next.js server components re-read the cookie
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
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}