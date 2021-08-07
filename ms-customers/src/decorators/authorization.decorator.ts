import { Action, HttpError } from "routing-controllers";
import logger from "@utils/logger.util";
import customerRepository from "@repositories/customer.repository";
import authService from "@services/auth.service";

export default async function Authorization(
    action: Action,
    roles?: string[]
): Promise<boolean> {
    const { authorization } = action.request.headers;

    if (!authorization) return false;

    try {
        const user = await authService.verifyToken(authorization);

        if (roles?.length && !roles?.includes(user?.role)) return false;

        const currentCustomer = await customerRepository.getCustomerByEmail(
            user?.email
        );

        if (!currentCustomer) return false;

        const { status, email } = currentCustomer;

        if (status !== 1) return false;

        action.request.user = { email };
    } catch (err) {
        logger.error(`AuthorizationDecorator=> ${err.message || err}`);
        throw new HttpError(401, err.message || err);
    }

    return true;
}
