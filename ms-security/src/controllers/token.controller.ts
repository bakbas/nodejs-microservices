import { JsonController, Body, Get } from "routing-controllers";
import errorFormatter from "../utils/errorFormatter";

@JsonController()
export class TokenController {
    @Get("token/validate")
    async validateToken() {
        return [];
    }

    @Get("token/refresh")
    async refreshToken() {
        return [];
    }

    @Get("token/invalidate")
    async invalidateToken() {
        return [];
    }
}

export default new TokenController();
