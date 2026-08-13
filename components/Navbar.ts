import { LanguageSwitcher } from "./LanguageSwitcher";
import { getLocale } from "@/lib/i18n/server";

export default async function Navbar() {
  const locale = await getLocale();
  
  return (
    <nav className="flex items-center justify-between p-6 bg-[#F6F5F1]">
      {/* Your Logo & Nav Links */}
      
      <div className="flex items-center gap-4">
        {/* Replace old button with this */}
        <LanguageSwitcher currentLocale={locale} />
      </div>
    </nav>
  );
}