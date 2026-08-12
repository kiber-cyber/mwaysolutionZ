import { cookies } from "next/headers";
import { LOCALE_COOKIE, DEFAULT_LOCALE } from "./config";
import { Locale, LOCALES } from "./dictionaries";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get(LOCALE_COOKIE)?.value as Locale;

  if (locale && LOCALES.includes(locale)) {
    return locale;
  }

  return DEFAULT_LOCALE;
}