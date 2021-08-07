import { getMongoRepository } from "typeorm";
import { EntityRepository } from "typeorm";
import User from "@entities/user.entity";

@EntityRepository(User)
class UserRepository {
    async getUserByEmail(email: string): Promise<User | undefined> {
        const repo = getMongoRepository(User);
        return await repo.findOne({ email });
    }

    async createUser(user: User): Promise<User | undefined> {
        const repo = getMongoRepository(User);
        return await repo.save(user);
    }
}

export default new UserRepository();
