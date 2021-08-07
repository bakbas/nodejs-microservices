import { omit } from "lodash";
import userRepository from "@repositories/user.repository";
import User from "@entities/user.entity";

class AuthService {
    public async validateUser(
        email: string,
        password: string
    ): Promise<User | boolean> {
        const user = await userRepository.getUserByEmail(email);
        return !!user && (await User.comparePassword(user, password))
            ? (omit(user, ["password"]) as User)
            : false;
    }
}

export default new AuthService();
