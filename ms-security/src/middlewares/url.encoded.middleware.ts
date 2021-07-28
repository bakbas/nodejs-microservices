import { Request, Response, NextFunction, json, urlencoded } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: "before" })
export default class UrlencodedMiddleware
    implements ExpressMiddlewareInterface
{
    public use(req: Request, res: Response, next: NextFunction) {
        return urlencoded({ extended: true })(req, res, next);
    }
}
