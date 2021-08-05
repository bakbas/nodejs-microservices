import { Request, Response, NextFunction } from "express";
import morgan, { StreamOptions } from "morgan";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import { logger } from "../utils";

@Middleware({ type: "before" })
export default class MorganMiddleware implements ExpressMiddlewareInterface {
    private readonly env = process.env.NODE_ENV || "development";

    private stream: StreamOptions = {
        write: (message: string) => logger.http(message)
    };

    private skip = () => {
        return this.env !== "development";
    };

    public use(req: Request, res: Response, next: NextFunction): void {
        morgan(
            ":method :url HTTP/:http-version - :status :res[content-length] - :referrer - :user-agent - :remote-addr - :remote-user [:date[clf]]",
            {
                stream: this.stream,
                skip: this.skip
            }
        )(req, res, next);
    }
}
