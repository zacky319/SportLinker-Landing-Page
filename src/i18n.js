// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import viTranslation from "./locales/vi.json"; // Import Vietnamese translations
import engTranslation from "./locales/eng.json"; // Import English translations

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        translation: viTranslation, // Vietnamese translations
      },
      en: {
        translation: engTranslation, // English translations
      },
    },
    lng: "en", // Default language is Vietnamese
    fallbackLng: "en", // Fallback to Vietnamese if translation key is missing
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
