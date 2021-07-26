import { JsonController, Body, Post } from "routing-controllers";
import argon2 from "argon2";
import { validate } from "class-validator";
import { getMongoRepository } from "typeorm";
import { Register } from "../models/register.model";
import { validationErrorFormatter } from "../utils";
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
            return validationErrorFormatter(errors);
        } else {
            const userRepository = getMongoRepository(User);
            const user = new User();
            user.email = email;
            user.password = await argon2.hash(password);

            try {
                return await userRepository.save(user);
            } catch (error) {
                return error;
            }
        }
    }

    @Post("user/login")
    async loginUser() {
        return [];
    }
}
