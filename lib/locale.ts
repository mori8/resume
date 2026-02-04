import enLocale from '@/data/locales/en.json';
import koLocale from '@/data/locales/ko.json';

export type Language = 'en' | 'ko';

export const locales = {
  en: enLocale,
  ko: koLocale,
};

export function getLocale(lang: Language) {
  return locales[lang];
}
