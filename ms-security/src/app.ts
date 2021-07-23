import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { createConnection } from "typeorm";
import { User } from "./entities/user";

dotenv.config({
    path: "env/.env"
});

createConnection().then(async (db) => {
    const userRepository = db.getMongoRepository(User);

    // const user = new User();
    // user.email = "bahtiyar@outlook.com";
    // user.password = "hello";

    // const asd = await userRepository
    //     .save(user)
    //     .catch((e) => console.log("e", e));

    // console.log(asd._id);

    const app = express();

    app.use(
        cors({
            origin: ["http://localhost:3000"]
        })
    );

    app.use(helmet());

    app.use(express.json());

    app.get("/api/users", async (req: Request, res: Response) => {
        const users: User[] = await userRepository.find();
        return res.json(users);
    });

    const PORT: number = parseInt(process.env.PORT as string, 10);

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });

    process.on("beforeExit", () => {
        console.log("closing");
    });
});
