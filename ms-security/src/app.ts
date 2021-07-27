import dotenv from "dotenv";
dotenv.config({
    path: "env/.env"
});
import express, { Application } from "express";
import { useExpressServer } from "routing-controllers";
import { createConnection, Connection } from "typeorm";
import { logger } from "./utils";

export default class App {
    private readonly app: Application = express();
    public db: Connection;
    private readonly dev =
        (process.env.NODE_ENV || "development") === "development";

    private middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

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
        this.middlewares();

        return useExpressServer(this.app, {
            routePrefix: "/api/",
            controllers: [__dirname + "/controllers/*.controller.ts"],
            middlewares: [__dirname + "/middlewares/*.middleware.ts"],
            defaultErrorHandler: false
        });
    }

    public async stop(): Promise<void> {
        logger.info("Application stoped");
    }
}
