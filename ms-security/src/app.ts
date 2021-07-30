import dotenv from "dotenv";
dotenv.config({
    path: "env/.env"
});
import express, { Application } from "express";
import { useExpressServer, Action } from "routing-controllers";
import { createConnection, Connection } from "typeorm";
import { logger } from "./utils";
import authorizationChecker from "./decorators/authorization.decorator";
import redisClient from "./configs/redis.config";

export default class App {
    private readonly app: Application = express();
    public db: Connection;
    private readonly dev =
        (process.env.NODE_ENV || "development") === "development";

    async databaseConnection(): Promise<Connection> {
        return await createConnection().catch((err) => {
            logger.error(
                "[Fatal] Failed to establish connection to database! Exiting..."
            );
            logger.error(JSON.stringify(err));
            process.exit(1);
        });
    }

    public async start(): Promise<Application> {
        this.db = await this.databaseConnection();

        return useExpressServer(this.app, {
            cors: true,
            routePrefix: "/api/",
            controllers: [__dirname + "/controllers/*.controller.ts"],
            middlewares: [__dirname + "/middlewares/*.middleware.ts"],
            defaultErrorHandler: false,
            currentUserChecker: (action: Action) => action.request.user,
            authorizationChecker
        });
    }

    public async stop(): Promise<void> {
        logger.info("Application stoped");
    }
}
