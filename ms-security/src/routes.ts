import { Router, Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { User } from "./entities/user";

const router = Router();

router.use("/api/users", async (req: Request, res: Response) => {
    const userRepository = getMongoRepository(User);
    const users: User[] = await userRepository.find();
    return res.json(users);
});

export { router };
