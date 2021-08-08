import kafka from "@configs/kafka.config";
import logger from "@utils/logger.util";
import CustomerService from "@services/customer.service";

class CustomerConsumer {
    private consumer = kafka.consumer({ groupId: "customer_group" });
    private customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService();
    }

    public async run() {
        await this.consumer.connect();

        await this.consumer.subscribe({
            topic: "user_topic",
            fromBeginning: true
        });

        await this.consumer.run({
            eachMessage: async ({ message }) => {
                const msg = JSON.parse(message.value?.toString() || "{}");

                if (msg.type === "register") {
                    try {
                        await this.customerService.create(msg);
                    } catch (error) {
                        console.log(error);
                        logger.error(error);
                    }
                }
            }
        });
    }
}

export default CustomerConsumer;
