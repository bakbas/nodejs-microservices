import { DeepPartial, getCustomRepository, Repository } from "typeorm";
import { assign, pickBy } from "lodash";
import Customer from "@entities/customer.entity";
import CustomerRepository from "@repositories/customer.repository";

class CustomerService {
    private customerRepository: Repository<Customer>;

    constructor() {
        this.customerRepository = getCustomRepository(CustomerRepository);
    }

    public async create({
        email,
        name,
        surname
    }: DeepPartial<Customer>): Promise<Customer> {
        const customer = this.customerRepository.create({
            email,
            name,
            surname
        });

        return await this.customerRepository.save(customer);
    }

    public async update(
        currentEmail: string,
        {
            email,
            phone,
            name,
            surname,
            dateOfBirth,
            nationality
        }: DeepPartial<Customer>
    ): Promise<Customer> {
        const customer = await this.customerRepository.findOne({
            email: currentEmail
        });

        if (!customer) throw new Error("Customer not found");

        const newCustomer = assign(
            customer,
            pickBy({
                email,
                phone,
                name,
                surname,
                dateOfBirth,
                nationality
            })
        );

        return await this.customerRepository.save(newCustomer);
    }
}

export default CustomerService;
