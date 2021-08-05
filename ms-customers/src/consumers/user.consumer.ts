import kafka from "../configs/kafka.config";
//import producerService from "../services/producer.service";

class UserConsumer {
    constructor(
        private consumer = kafka.consumer({ groupId: "customer_group" })
    ) {
        console.log("CustomerConsumer");
    }

    async run() {
        await this.consumer.connect();

        await this.consumer.subscribe({
            topic: "user_topic",
            fromBeginning: true
        });

        await this.consumer.run({
            eachMessage: async (result) => {
                console.log("eachMessage: " + JSON.stringify(result));
            }
        });

        // await producerService.send("deneme 1234", "user_topic");
    }
}

export default new UserConsumer();
