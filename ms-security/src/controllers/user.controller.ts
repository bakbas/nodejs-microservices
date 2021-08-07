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
import { DeepPartial, getMongoRepository } from "typeorm";
import { User } from "../entities/user.entity";
import { authService, jwtService } from "../services";
import i18next from "../configs/i18n.config";
import producerService from "../services/producer.service";

@JsonController()
export class UserController {
    public readonly userRepository = getMongoRepository(User);

    @OnUndefined(201)
    @Post("user/register")
    async registerUser(
        @Body() { email = "", password = "", name, surname }: DeepPartial<User>
    ): Promise<void> {
        const user = new User();
        user.email = email;
        user.password = await User.hashPassword(password);

        await this.userRepository.save(user);

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
