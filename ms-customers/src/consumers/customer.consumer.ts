import kafka from "../configs/kafka.config";
import customerService from "../services/customer.service";
import logger from "../utils/logger.util";

class CustomerConsumer {
    private consumer = kafka.consumer({ groupId: "customer_group" });

    async run() {
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
                        customerService.register(msg);
                    } catch (error) {
                        console.log(error);
                        logger.error(error);
                    }
                }
            }
        });
    }
}

export default new CustomerConsumer();
