import {
    JsonController,
    Body,
    Post,
    Get,
    Authorized,
    CurrentUser
} from "routing-controllers";
import { getMongoRepository } from "typeorm";
import { Customer } from "../entities/customer.entity";

@JsonController()
export class UserController {
    public readonly customerRepository = getMongoRepository(Customer);

    @Post("customer/register")
    async registerUser(@Body() body: Customer): Promise<boolean> {
        const { email } = body;

        console.log(JSON.stringify(body));

        // const user = new Customer();
        // user.email = email;

        // await this.customerRepository.save(user);
        return true;
    }

    @Authorized()
    @Get("customer")
    async getUser(@CurrentUser() currentUser: Customer): Promise<Customer> {
        return { ...currentUser };
    }
}
