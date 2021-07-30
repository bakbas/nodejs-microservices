import { Action, HttpError } from "routing-controllers";
import { getMongoRepository } from "typeorm";
import { User } from "../entities/user.entity";
import jwtService from "../services/jwt.service";

export default async function Authorization(
    action: Action,
    roles?: string[]
): Promise<boolean> {
    const { authorization } = action.request.headers;

    if (!authorization) return false;

    const [, token] = authorization.split(" ");

    try {
        const tokenBody = await jwtService.verify(token);

        const userRepository = getMongoRepository(User);

        const currentUser = await userRepository.findOne({
            email: tokenBody.email
        });

        if (!currentUser) return false;

        const { role, status, email } = currentUser;

        if (status !== 1) return false;

        if (!!roles?.length && !roles?.includes(currentUser?.role))
            return false;

        action.request.user = { email, role };
    } catch (err) {
        throw new HttpError(401, err.message || err);
    }

    return true;
}
