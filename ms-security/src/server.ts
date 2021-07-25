import { Server } from "http";

import { App } from "./app";

import Logger from "./utils/logger";

type ShutdownHandler = () => void;

function getShutdownHandler(app: App, server: Server): ShutdownHandler {
    return function () {
        server.close(async (err) => {
            Logger.info("Stopping...");
            await app.stop();
            Logger.info("Stopped");
            process.exit(err ? 1 : 0);
        });
    };
}

const port = process.env.PORT;

async function server(): Promise<void> {
    const app = new App();
    const application = await app.start();
    const server = application.listen(port);
    const shutdown = getShutdownHandler(app, server);

    process.on("SIGINT", shutdown);
    process.on("SIGQUIT", shutdown);
    process.on("SIGTERM", shutdown);
}

Promise.resolve()
    .then(server)
    .then(() => Logger.info(`🚀 Server is running on port: ${port}`))
    .catch((err) => Logger.error(err));
