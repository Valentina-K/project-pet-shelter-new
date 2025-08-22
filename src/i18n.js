import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импорт локальных файлов
import en from './locales/en/translation.json';
import ua from './locales/ua/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
    lng: 'ua', // язык по умолчанию
    fallbackLng: 'en', // если нет перевода — использовать английский
    interpolation: {
      escapeValue: false, // React уже экранирует HTML
    },
  });

export default i18n;
