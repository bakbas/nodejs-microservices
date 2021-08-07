import dotenv from "dotenv";
dotenv.config({
    path: "env/.env"
});
import express, { Application } from "express";
import { useExpressServer, Action } from "routing-controllers";
import { createConnection, Connection } from "typeorm";
import logger from "@utils/logger.util";
import authorizationChecker from "@decorators/authorization.decorator";
import consumers from "@consumers/index";

export default class App {
    private readonly app: Application = express();
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

    async consumers(): Promise<void> {
        await consumers.run();
    }

    public async start(): Promise<Application> {
        await this.databaseConnection();
        await this.consumers();

        return useExpressServer(this.app, {
            cors: true,
            routePrefix: "/api/",
            controllers: [__dirname + "/controllers/*.controller.ts"],
            middlewares: [__dirname + "/middlewares/*.middleware.ts"],
            defaultErrorHandler: false,
            currentUserChecker: (action: Action) => action.request.customer,
            authorizationChecker
        });
    }

    public async stop(): Promise<void> {
        logger.info("Application stoped");
    }
}
