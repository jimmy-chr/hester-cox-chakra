import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files (optional)
import enTranslation from "./locales/en/translation.json";
import nlTranslation from "./locales/nl/translation.json";

// Define resources type to ensure correct typings
const resources = {
  en: { translation: enTranslation },
  nl: { translation: nlTranslation },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources, // Specify type for the resources object
    fallbackLng: localStorage.getItem("i18nextLng") || "en", // Default to stored language or English
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
    detection: {
      order: ["localStorage", "navigator"], // Check localStorage first, then browser settings
      caches: ["localStorage"], // Cache the language setting in localStorage
    },
  });

export default i18n;
