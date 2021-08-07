import { DeepPartial } from "typeorm";
import Customer from "@entities/customer.entity";
import customerRepository from "@repositories/customer.repository";

class CustomerService {
    public async register({
        email = "",
        name = "",
        surname = ""
    }: DeepPartial<Customer>): Promise<any> {
        const user = new Customer();
        user.email = email;
        user.name = name;
        user.surname = surname;

        return await customerRepository.createCustomer(user);
    }
}

export default new CustomerService();
