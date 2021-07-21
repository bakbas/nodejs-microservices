import dotenv from "dotenv";
import express from "express";
import { Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { createConnection } from "typeorm";
import { User } from "./entities/user";

dotenv.config({
    path: "env/.env"
});

createConnection().then((db) => {
    const accountRepository = db.getMongoRepository(User);

    const app = express();

    app.use(
        cors({
            origin: ["http://localhost:3000"]
        })
    );

    app.use(helmet());

    app.use(express.json());

    app.get("/api/accounts", async (res: Response) => {
        const accounts = await accountRepository.find();
        return res.send(accounts);
    });

    const PORT: number = parseInt(process.env.PORT as string, 10);

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });

    process.on("beforeExit", () => {
        console.log("closing");
    });
});
