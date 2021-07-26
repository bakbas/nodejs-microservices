import { JsonController, Body, Post } from "routing-controllers";
import argon2 from "argon2";
import { validate } from "class-validator";
import { getMongoRepository } from "typeorm";
import { Register } from "../models/register.model";
import errorFormatter from "../utils/errorFormatter";
import { User } from "../entities/user.entity";

@JsonController()
export class UserController {
    @Post("user/register")
    async registerUser(@Body() body: any) {
        const { email, password, passwordConfirm } = body;
        const register = new Register();
        register.email = email;
        register.password = password;
        register.passwordConfirm = passwordConfirm;

        const errors = await validate(register);

        if (errors.length > 0) {
            return errorFormatter(errors);
        } else {
            const userRepository = getMongoRepository(User);
            const user = new User();
            user.email = email;
            user.password = await argon2.hash(password);

            const saved = await userRepository
                .save(user)
                .catch((err) => console.log("err", err.code));

            console.log("saved", saved);

            return [];
        }
    }

    @Post("user/login")
    async loginUser() {
        return [];
    }
}
