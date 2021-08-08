import {
    JsonController,
    Body,
    Post,
    Put,
    Get,
    Authorized,
    CurrentUser,
    OnUndefined
} from "routing-controllers";
import { DeepPartial } from "typeorm";
import { omit } from "lodash";
import Customer from "@entities/customer.entity";
import CustomerService from "@services/customer.service";

@JsonController()
export class CustomerController {
    private customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService();
    }

    @OnUndefined(201)
    @Post("customer")
    async createCustomer(@Body() body: Customer): Promise<void> {
        const { email, name, surname } = body;

        await this.customerService.create({
            email,
            name,
            surname
        });
    }

    @Authorized()
    @Put("customer")
    async updateCustomer(
        @CurrentUser() currentCustomer: Customer,
        @Body() body: Customer
    ): Promise<DeepPartial<Customer>> {
        const { email, phone, name, surname, dateOfBirth, nationality } = body;

        const customer = await this.customerService.update(
            currentCustomer.email,
            {
                email,
                phone,
                name,
                surname,
                dateOfBirth,
                nationality
            }
        );

        return omit(customer, ["id", "status", "createdAt"]);
    }

    @Authorized()
    @Get("customer")
    async getCustomer(
        @CurrentUser() currentCustomer: Customer
    ): Promise<Customer> {
        return currentCustomer;
    }
}
