import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import vn from "./locales/vn.json";

const getInitialLanguage = (): string => {
  const savedLang = localStorage.getItem("appLanguage");
  return savedLang ? savedLang : "en";
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vn: {
      translation: vn,
    },
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
