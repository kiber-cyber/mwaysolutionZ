import { LanguageSwitcher } from "./LanguageSwitcher";
import { getLocale } from "@/lib/i18n/server";

export default async function Footer() {
  const locale = await getLocale();

  return (
    <footer className="bg-[#0E1B2B] text-white p-10">
      {/* Footer Content */}
      
      <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
        <p className="text-sm text-white/50">© 2026 MWAY Solutions.</p>
        
        {/* Replace old local state buttons with this */}
        <LanguageSwitcher currentLocale={locale} />
      </div>
    </footer>
  );
}