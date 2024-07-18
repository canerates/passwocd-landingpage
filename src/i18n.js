import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translations_en from './locales/en/translations.json'
import translations_tr from './locales/tr/translations.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translations: translations_en
      },
      tr: {
        translations: translations_tr
      }
    },
    supportedLngs: ["en", "tr"],
    ns: ['translations'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;