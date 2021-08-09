import kafka from "@configs/kafka.config";
import logger from "@utils/logger.util";
import UserService from "@services/user.service";

class UserConsumer {
    private consumer = kafka.consumer({ groupId: "user_group" });
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async run() {
        await this.consumer.connect();

        await this.consumer.subscribe({
            topic: "customer_topic",
            fromBeginning: true
        });

        await this.consumer.run({
            eachMessage: async ({ message }) => {
                const msg = JSON.parse(message.value?.toString() || "{}");
                if (msg.type === "update") {
                    try {
                        await this.userService.update(msg.currentEmail, msg);
                    } catch (error) {
                        console.log(error);
                        logger.error(error);
                    }
                }
            }
        });
    }
}

export default UserConsumer;
