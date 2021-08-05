import { Action, HttpError } from "routing-controllers";
import { getMongoRepository } from "typeorm";
import { Customer } from "../entities/customer.entity";
import { AuthService } from "../services";

export default async function Authorization(
    action: Action,
    roles?: string[]
): Promise<boolean> {
    const { authorization } = action.request.headers;

    if (!authorization) return false;

    try {
        const user: any = await AuthService.verifyToken(authorization);

        if (!!roles?.length && !roles?.includes(user?.role)) return false;

        const customerRepository = getMongoRepository(Customer);

        const currentCustomer = await customerRepository.findOne({
            email: user?.email
        });

        if (!currentCustomer) return false;

        const { email } = currentCustomer;

        action.request.user = { email };
    } catch (err) {
        throw new HttpError(401, err.message || err);
    }

    return true;
}
