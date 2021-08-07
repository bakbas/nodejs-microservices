import {
    JsonController,
    Body,
    Post,
    Get,
    Authorized,
    CurrentUser,
    HttpError,
    OnUndefined
} from "routing-controllers";
import { DeepPartial } from "typeorm";
import User from "@entities/user.entity";
import jwtService from "@services/jwt.service";
import authService from "@services/auth.service";
import i18next from "@configs/i18n.config";
import producerService from "@services/producer.service";
import userService from "@services/user.service";

@JsonController()
export class UserController {
    @OnUndefined(201)
    @Post("user/register")
    async registerUser(
        @Body() { email = "", password = "", name, surname }: DeepPartial<User>
    ): Promise<void> {
        await userService.register({ email, password });

        await producerService.send(
            { type: "register", email, name, surname },
            "user_topic"
        );

        return;
    }

    @Post("user/login")
    async loginUser(
        @Body() { email = "", password = "" }: DeepPartial<User>
    ): Promise<unknown> {
        const user = (await authService.validateUser(email, password)) as User;

        if (!user) throw new HttpError(404, i18next.t("errors.loginFail"));

        const { role, failedLoginAttempt, status } = user;

        if (failedLoginAttempt > 2)
            throw new HttpError(403, i18next.t("errors.lockedAccount"));

        if (status !== 1)
            throw new HttpError(403, i18next.t("errors.inactiveAccount"));

        const token = jwtService.sign({ email, role });

        return { token };
    }

    @Authorized()
    @Get("user")
    async getUser(@CurrentUser() currentUser: User): Promise<User> {
        return currentUser;
    }
}
