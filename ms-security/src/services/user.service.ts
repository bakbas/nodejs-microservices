import { DeepPartial, getCustomRepository, Repository } from "typeorm";
import { assign, pickBy } from "lodash";
import User from "@entities/user.entity";
import UserRepository from "@repositories/user.repository";

class UserService {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    public async create({ email, password }: DeepPartial<User>): Promise<User> {
        password = await User.hashPassword(password as string);
        const user = this.userRepository.create({
            email,
            password
        });

        return await this.userRepository.save(user);
    }

    public async update(
        currentEmail: string,
        { email, password, status, failedLoginAttempt }: DeepPartial<User>
    ): Promise<User> {
        const user = await this.userRepository.findOne({
            email: currentEmail
        });

        if (!user) throw new Error("User not found");

        const newUser = assign(
            user,
            pickBy({
                email,
                password,
                status,
                failedLoginAttempt
            })
        );

        return await this.userRepository.save(newUser);
    }
}

export default UserService;
