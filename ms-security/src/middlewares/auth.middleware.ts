import {
    BadRequestError,
    ExpressMiddlewareInterface
} from "routing-controllers";

import { User } from "../entities/user.entity";
import JwtService from "../services/jwt.service";

export default class AuthMiddleware implements ExpressMiddlewareInterface {
    constructor(private jwtService: JwtService) {}

    public async use(request: any, response: any, next: any): Promise<void> {
        const requestToken: string = request.headers.authorization;
        if (!requestToken) {
            throw new BadRequestError("Required headers not provided");
        }

        const tokenVerifiedData: { user: User; token: string } =
            await this.jwtService.verifyToken(requestToken);

        request.currentUser = tokenVerifiedData.user;

        next();
    }
}
