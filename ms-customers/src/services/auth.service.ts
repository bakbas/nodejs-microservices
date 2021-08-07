import axios from "axios";
import logger from "../utils/logger.util";

class AuthService {
    public async verifyToken(token: string): Promise<any> {
        const user = await axios
            .get("http://localhost:8000/api/token/validate", {
                headers: { authorization: token }
            })
            .catch((e) => {
                logger.error(`AuthService:verifyToken=> ${e.message}`);
            });

        return user?.data;
    }
}

export default new AuthService();
