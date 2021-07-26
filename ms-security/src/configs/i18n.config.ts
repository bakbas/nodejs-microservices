import i18next from "i18next";
import i18nextHttpMiddleware from "i18next-http-middleware";

import { en, tr } from "../locales";

i18next.use(i18nextHttpMiddleware.LanguageDetector).init({
    resources: {
        en: { translation: en },
        tr: { translation: tr }
    },
    lng: "en",
    fallbackLng: "en"
});

export default i18next;
