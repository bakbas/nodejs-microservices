import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: "en",
        lng: "en",
        backend: {
            loadPath: `/locales/{{lng}}.json?v=${process.env.ASSETS_VERSION}`
        }
    });

export default i18n;
