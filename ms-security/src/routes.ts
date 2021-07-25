import { Router, Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import { validate } from "class-validator";
import { User } from "./entities/user";
import errorFormatter from "./utils/errorFormatter";

const router = Router();

router.use("/api/user/login", async (req: Request, res: Response) => {
    const userRepository = getMongoRepository(User);
    const user: User[] = await userRepository.find();
    return res.json(user);
});

router.use("/api/user/register", async (req: Request, res: Response) => {
    const userRepository = getMongoRepository(User);
    const { email, password } = req.body;
    const user = new User();
    user.email = email;
    user.password = password;

    const errors = await validate(user);

    if (errors.length > 0) {
        return res.json(errorFormatter(errors));
    } else {
        const saved = await userRepository
            .save(user)
            .catch((err) => console.log(err));
        console.log(saved);
        return res.json([]);
    }
});

router.use("/api/token/validate", async (req: Request, res: Response) => {
    const userRepository = getMongoRepository(User);
    const users: User[] = await userRepository.find();
    return res.json(users);
});

router.use("/api/token/invalidate", async (req: Request, res: Response) => {
    const userRepository = getMongoRepository(User);
    const users: User[] = await userRepository.find();
    return res.json(users);
});

router.use("/api/token/refresh", async (req: Request, res: Response) => {
    const userRepository = getMongoRepository(User);
    const users: User[] = await userRepository.find();
    return res.json(users);
});

export { router };
