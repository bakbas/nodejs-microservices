import {
    JsonController,
    Body,
    Post,
    Get,
    Authorized,
    CurrentUser,
    HttpError
} from "routing-controllers";
import { getMongoRepository } from "typeorm";
import { Register } from "../models/register.model";
import { User } from "../entities/user.entity";
import { authService, jwtService } from "../services";
import i18next from "../configs/i18n.config";

@JsonController()
export class UserController {
    public readonly userRepository = getMongoRepository(User);

    @Post("user/register")
    async registerUser(@Body() body: Register) {
        const { email, password } = body;

        const user = new User();
        user.email = email;
        user.password = await User.hashPassword(password);

        await this.userRepository.save(user);
        return {};
    }

    @Post("user/login")
    async loginUser(@Body() body: Register) {
        const { email, password } = body;

        const user = (await authService.validateUser(email, password)) as User;

        if (!user) throw new HttpError(404, i18next.t("errors.loginFail"));

        const { role, failedLoginAttempt } = user;

        if (failedLoginAttempt > 2)
            throw new HttpError(400, i18next.t("errors.lockedAccount"));

        const token = jwtService.sign({ email, role });

        return { token };
    }

    @Authorized()
    @Get("user")
    async getUser(@CurrentUser() currentUser: User) {
        return { ...currentUser };
    }
}
