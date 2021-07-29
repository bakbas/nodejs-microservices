import {
    JsonController,
    Body,
    Post,
    Get,
    Authorized,
    UseBefore,
    CurrentUser
} from "routing-controllers";
import passport from "passport";
import argon2 from "argon2";
import { getMongoRepository } from "typeorm";
import { Register } from "../models/register.model";
import { User, UserRole } from "../entities/user.entity";

@JsonController()
export class UserController {
    public readonly userRepository = getMongoRepository(User);

    @Post("user/register")
    async registerUser(@Body() body: Register) {
        const { email, password } = body;

        const user = new User();
        user.email = email;
        user.password = await argon2.hash(password);

        await this.userRepository.save(user);
        return {};
    }

    @Authorized()
    @Post("user/login")
    async loginUser(@CurrentUser() currentUser: User) {
        return { ...currentUser };
    }

    @Get("/facebook")
    @UseBefore(passport.authenticate("facebook", { scope: "email" }))
    facebook() {}

    @Get("/facebook/callback")
    @UseBefore(
        passport.authenticate("facebook", {
            successRedirect: "/",
            failureRedirect: "/login"
        })
    )
    facebookCallback() {}

    @Get("/google")
    @UseBefore(passport.authenticate("google", { scope: ["profile", "email"] }))
    google() {}

    @Get("/google/callback")
    @UseBefore(
        passport.authenticate("google", {
            successRedirect: "/",
            failureRedirect: "/login"
        })
    )
    googleCallback() {}
}
