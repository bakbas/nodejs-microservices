import { verify, sign, Secret, JwtPayload } from "jsonwebtoken";

const { JWT_SIGNATURE, JWT_EXPIRATION } = process.env;

class JwtService {
    public verify(token: string): JwtPayload {
        return verify(token, JWT_SIGNATURE as Secret) as JwtPayload;
    }

    public sign(body: object) {
        return sign(body, JWT_SIGNATURE as Secret, {
            expiresIn: JWT_EXPIRATION
        });
    }
}

export default new JwtService();
