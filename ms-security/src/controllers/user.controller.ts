import { JsonController, Body, Post } from "routing-controllers";
import argon2 from "argon2";
import { getMongoRepository } from "typeorm";
import { Register } from "../models/register.model";
import { User } from "../entities/user.entity";

@JsonController()
export class UserController {
    @Post("user/register")
    async registerUser(@Body() body: Register) {
        const { email, password } = body;

        const userRepository = getMongoRepository(User);
        const user = new User();
        user.email = email;
        user.password = await argon2.hash(password);

        return await userRepository.save(user);
    }

    @Post("user/login")
    async loginUser() {
        return [];
    }
}
