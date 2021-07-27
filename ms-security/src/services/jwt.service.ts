import jwt, { Secret } from "jsonwebtoken";
import _ from "lodash";
import { NotFoundError, UnauthorizedError } from "routing-controllers";
import { getMongoRepository, MongoRepository } from "typeorm";

const { JWT_SIGNATURE } = process.env;

import { User } from "../entities/user.entity";

export default class JwtService {
    constructor(private userRepository: MongoRepository<any>) {
        this.userRepository = getMongoRepository(User);
    }

    public async createToken(user: User): Promise<string> {
        //const token: string = user.generateAuthToken();

        //await this.tokenRepository.addByUser(user, token);

        //return token;
        return "asd";
    }

    // public async flushToken(user: User, token: string): Promise<boolean> {
    //     const userTokens = await this.tokenRepository.getAllByUser(user);
    //     const tokenKey: string | undefined = _.findKey(
    //         userTokens,
    //         (value: any) => value === token
    //     );

    //     if (tokenKey === undefined) {
    //         throw new NotFoundError();
    //     }

    //     return await this.tokenRepository.deleteByKey(tokenKey);
    // }

    // public checkIfExists(user: User, token: string): Promise<boolean> {
    //     return this.tokenRepository.exists(user, token);
    // }

    public async verifyToken(
        token: string
    ): Promise<{ user: User; token: string }> {
        let verifiedToken: any;
        try {
            verifiedToken = jwt.verify(token, JWT_SIGNATURE as Secret);
        } catch (error) {
            throw new UnauthorizedError("Invalid token");
        }

        const user: User = await this.userRepository
            .findOneOrFail({ email: verifiedToken.email })
            .catch(() => {
                throw new NotFoundError("User does not exist");
            });
        //const exists: boolean = await this.checkIfExists(user, token);

        //if (!exists) {
        if (true) {
            throw new UnauthorizedError("Invalid token");
        }

        return { user, token };
    }
}
