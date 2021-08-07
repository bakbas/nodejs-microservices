import {
    JsonController,
    Get,
    Authorized,
    CurrentUser,
    HeaderParam
} from "routing-controllers";
import User from "@entities/user.entity";
import jwtService from "@services/jwt.service";
import redisService from "@services/redis.service";
import i18next from "@configs/i18n.config";

@Authorized()
@JsonController()
export class TokenController {
    @Get("token/validate")
    async validateToken(@CurrentUser() currentUser: User): Promise<User> {
        return currentUser;
    }

    @Get("token/refresh")
    async refreshToken(@CurrentUser() currentUser: User): Promise<unknown> {
        const { email, role } = currentUser;
        const token = jwtService.sign({ email, role });
        return { token };
    }

    @Get("token/invalidate")
    async invalidateToken(
        @HeaderParam("authorization") jwtToken: string
    ): Promise<unknown> {
        const [, token] = jwtToken.split(" ");

        return (
            !(await redisService.set(`blacklist_${token}`, "true")) || {
                status: "success",
                message: i18next.t("token.revoke")
            }
        );
    }
}
