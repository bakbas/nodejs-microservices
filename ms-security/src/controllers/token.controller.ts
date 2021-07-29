import {
    JsonController,
    Body,
    Get,
    Authorized,
    CurrentUser
} from "routing-controllers";
import { User } from "../entities/user.entity";
import authService from "../services/auth.service";

@Authorized()
@JsonController()
export class TokenController {
    @Get("token/validate")
    async validateToken(@CurrentUser() currentUser: User) {
        return { ...currentUser };
    }

    @Get("token/refresh")
    async refreshToken(@CurrentUser() currentUser: User) {
        return [];
    }

    @Get("token/invalidate")
    async invalidateToken(@CurrentUser() currentUser: User) {
        return [];
    }
}
