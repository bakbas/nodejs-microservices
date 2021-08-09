import { getCustomRepository } from "typeorm";
import { Action, HttpError } from "routing-controllers";
import UserRepository from "@repositories/user.repository";
import jwtService from "@services/jwt.service";
import logger from "@utils/logger.util";

export default async function Authorization(
    action: Action,
    roles?: string[]
): Promise<boolean> {
    const userRepository = getCustomRepository(UserRepository);

    const { authorization } = action.request.headers;

    if (!authorization) return false;

    try {
        const [, token] = authorization.split(" ");

        const tokenBody = await jwtService.verify(token);

        const currentUser = await userRepository.findOne({
            email: tokenBody?.email
        });

        if (!currentUser) return false;

        const { role, status, email } = currentUser;

        if (status !== 1) return false;

        if (roles?.length && !roles?.includes(currentUser?.role)) return false;

        action.request.user = { email, role };
    } catch (err) {
        logger.error(`AuthorizationDecorator=> ${err.message || err}`);
        throw new HttpError(401, err.message || err);
    }

    return true;
}
