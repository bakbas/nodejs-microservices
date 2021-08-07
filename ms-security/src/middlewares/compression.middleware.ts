import compression from "compression";
import { Request, Response, NextFunction } from "express";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: "before" })
export default class CompressionMiddleware
    implements ExpressMiddlewareInterface
{
    public use(req: Request, res: Response, next: NextFunction): void {
        compression()(req, res, next);
    }
}
