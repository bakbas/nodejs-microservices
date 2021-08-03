import { Request, Response, NextFunction, json } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: "before" })
export default class JsonMiddleware implements ExpressMiddlewareInterface {
    public use(req: Request, res: Response, next: NextFunction): void {
        return json()(req, res, next);
    }
}
