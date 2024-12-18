import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import en from "../locales/en.json";
import es from "../locales/es.json";
import de from "../locales/de.json";

const fallbackLanguage = "en";
const deviceLanguage =
  Localization.getLocales()[0]?.languageCode || fallbackLanguage;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    de: { translation: de },
  },
  lng: deviceLanguage,
  fallbackLng: fallbackLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
