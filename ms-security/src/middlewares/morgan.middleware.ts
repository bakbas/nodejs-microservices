import morgan, { StreamOptions } from "morgan";

import { logger } from "../utils";

const stream: StreamOptions = {
    write: (message: string) => logger.http(message)
};

const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
};

const morganMiddleware = morgan(
    ":method :url HTTP/:http-version - :status :res[content-length] - :referrer - :user-agent - :remote-addr - :remote-user [:date[clf]]",
    { stream, skip }
);

export default morganMiddleware;
