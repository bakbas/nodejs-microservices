import { getCustomRepository, Repository } from "typeorm";
import { omit } from "lodash";
import UserRepository from "@repositories/user.repository";
import User from "@entities/user.entity";

class AuthService {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    public async validateUser(
        email: string,
        password: string
    ): Promise<User | boolean> {
        const user = await this.userRepository.findOne({ email });
        return user && (await User.comparePassword(user, password))
            ? (omit(user, ["password"]) as User)
            : false;
    }
}

export default new AuthService();
