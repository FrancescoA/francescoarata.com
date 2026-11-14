import { ui, type Lang, type TranslationKey } from "./ui";

export function getLang(locale?: string): Lang {
  if (locale === "it" || locale === "fr") {
    return locale;
  }

  return "en";
}

export function useTranslations(lang: Lang) {
  return (key: TranslationKey): string => ui[key][lang]!;
}