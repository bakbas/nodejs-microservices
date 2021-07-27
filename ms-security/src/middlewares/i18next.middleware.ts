import i18nextHttpMiddleware from "i18next-http-middleware";
import { Request, Response, NextFunction } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import i18next from "../configs/i18n.config";

@Middleware({ type: "before" })
export default class I18nextMiddleware implements ExpressMiddlewareInterface {
    public use(req: Request, res: Response, next: NextFunction) {
        return i18nextHttpMiddleware.handle(i18next)(req, res, next);
    }
}
