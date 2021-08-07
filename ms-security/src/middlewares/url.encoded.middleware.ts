import { Request, Response, NextFunction, urlencoded } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: "before" })
export default class UrlencodedMiddleware
    implements ExpressMiddlewareInterface
{
    public use(req: Request, res: Response, next: NextFunction): void {
        urlencoded({ extended: true })(req, res, next);
    }
}
