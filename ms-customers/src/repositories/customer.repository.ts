import { EntityRepository, Repository } from "typeorm";
import Customer from "@entities/customer.entity";

@EntityRepository(Customer)
class CustomerRepository extends Repository<Customer> {}

export default CustomerRepository;
