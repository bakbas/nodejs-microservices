import {
    JsonController,
    Body,
    Post,
    Get,
    Authorized,
    CurrentUser,
    OnUndefined
} from "routing-controllers";
import { DeepPartial } from "typeorm";
import Customer from "@entities/customer.entity";
import customerService from "@services/customer.service";

@JsonController()
export class CustomerController {
    @OnUndefined(201)
    @Post("customer/register")
    async registerUser(
        @Body() { email = "", name = "", surname = "" }: DeepPartial<Customer>
    ): Promise<any> {
        await customerService.register({
            email,
            name,
            surname
        });

        return;
    }

    @Authorized()
    @Get("customer")
    async getUser(@CurrentUser() currentUser: Customer): Promise<Customer> {
        return currentUser;
    }
}
