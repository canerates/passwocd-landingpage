import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translations_de from './locales/de/translations.json'
import translations_en from './locales/en/translations.json'
import translations_es from './locales/es/translations.json'
import translations_fr from './locales/fr/translations.json'
import translations_ja from './locales/ja/translations.json'
import translations_ko from './locales/ko/translations.json'
import translations_tr from './locales/tr/translations.json'
import translations_zhCN from './locales/zh-cn/translations.json'
import translations_zhTW from './locales/zh-tw/translations.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      "de": {
        translations: translations_de
      },
      "en": {
        translations: translations_en
      },
      "es": {
        translations: translations_es
      },
      "fr": {
        translations: translations_fr
      },
      "ja": {
        translations: translations_ja
      },
      "ko": {
        translations: translations_ko
      },
      "tr": {
        translations: translations_tr
      },
      "zh-CN": {
        translations: translations_zhCN
      },
      "zh-TW": {
        translations: translations_zhTW
      },
    },
    supportedLngs: ["de", "en", "es", "fr", "ja", "ko", "tr", "zh-CN", "zh-TW"],
    ns: ['translations'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;