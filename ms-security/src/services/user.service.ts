import { DeepPartial } from "typeorm";
import User from "@entities/user.entity";
import userRepository from "@repositories/user.repository";

class UserService {
    public async register({
        email = "",
        password = ""
    }: DeepPartial<User>): Promise<any> {
        const user = new User();
        user.email = email;
        user.password = await User.hashPassword(password);

        return await userRepository.createUser(user);
    }
}

export default new UserService();
