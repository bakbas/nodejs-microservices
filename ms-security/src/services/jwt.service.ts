import i18next from "../configs/i18n.config";
import { verify, sign, Secret, JwtPayload } from "jsonwebtoken";
import redisService from "./redis.service";

const { JWT_SIGNATURE, JWT_EXPIRATION } = process.env;

class JwtService {
    public async verify(token: string): Promise<JwtPayload> {
        const result = await redisService.get(`blacklist_${token}`);
        if (!!result) throw new Error(i18next.t("errors.invalidToken"));
        return verify(token, JWT_SIGNATURE as Secret) as JwtPayload;
    }

    public sign(body: object) {
        return sign(body, JWT_SIGNATURE as Secret, {
            expiresIn: JWT_EXPIRATION
        });
    }
}

export default new JwtService();
