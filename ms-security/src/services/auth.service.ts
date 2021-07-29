import { getMongoRepository } from "typeorm";
import { omit } from "lodash";
import { User } from "../entities/user.entity";

class AuthService {
    public readonly userRepository = getMongoRepository(User);

    public async validateUser(
        email: string,
        password: string
    ): Promise<User | boolean> {
        const user = await this.userRepository.findOne({ email });
        return !!user && (await User.comparePassword(user, password))
            ? (omit(user, ["password"]) as User)
            : false;
    }
}

export default new AuthService();
