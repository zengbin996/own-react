import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from './en.json';
import translation_zh from './zh.json';
import translation_jp from './ja.json';

const resources = {
  en: {
    translation: translation_en,
  },
  zh: {
    translation: translation_zh,
  },
  ja: {
    translation: translation_jp,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  interpolation: {
    escapeValue: false,
  },
});

export const languageOption: Array<{ key: string; value: string }> = [
  {
    key: 'zh',
    value: '中文',
  },
  {
    key: 'en',
    value: 'English',
  },
  {
    key: 'ja',
    value: '日本語',
  },
];

export default i18n;
