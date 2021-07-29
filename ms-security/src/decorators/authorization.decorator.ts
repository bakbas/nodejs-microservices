import { Action, HttpError } from "routing-controllers";
import { verify, Secret, JwtPayload } from "jsonwebtoken";
import { getMongoRepository } from "typeorm";
import { User } from "../entities/user.entity";

const { JWT_SIGNATURE } = process.env;

export default async function Authorization(
    action: Action,
    roles?: string[]
): Promise<boolean> {
    const { authorization } = action.request.headers;

    if (!authorization) return false;

    const [, token] = authorization.split(" ");

    try {
        const payload = verify(token, JWT_SIGNATURE as Secret) as JwtPayload;

        const userRepository = getMongoRepository(User);

        const currentUser = await userRepository.findOne({
            email: payload.email
        });

        if (!currentUser) return false;

        const { role, status, email } = currentUser;

        if (status !== 1) return false;

        if (!!roles?.length && !roles?.includes(currentUser?.role))
            return false;

        action.request.user = { email, role };
    } catch (err) {
        throw new HttpError(400, err);
    }

    return true;
}
