import { getMongoRepository } from "typeorm";
import { EntityRepository } from "typeorm";
import Customer from "../entities/customer.entity";

@EntityRepository(Customer)
class CustomerRepository {
    async getCustomerByEmail(email: string): Promise<Customer | undefined> {
        const repo = getMongoRepository(Customer);
        return await repo.findOne({ email });
    }

    async createCustomer(customer: Customer): Promise<Customer | undefined> {
        const repo = getMongoRepository(Customer);
        return await repo.save(customer);
    }
}

export default new CustomerRepository();
