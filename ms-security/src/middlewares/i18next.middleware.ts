import i18nextHttpMiddleware from "i18next-http-middleware";
import i18next from "../configs/i18n.config";

const i18nextMiddleware = i18nextHttpMiddleware.handle(i18next);

export default i18nextMiddleware;
