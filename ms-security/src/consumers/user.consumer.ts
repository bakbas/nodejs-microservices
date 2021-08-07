import kafka from "@configs/kafka.config";

class UserConsumer {
    constructor(private consumer = kafka.consumer({ groupId: "user_group" })) {}

    async run() {
        await this.consumer.connect();

        await this.consumer.subscribe({
            topic: "user_topic",
            fromBeginning: true
        });

        await this.consumer.run({
            eachMessage: async (result) => {
                //console.log("eachMessage: " + JSON.stringify(result));
            }
        });
    }
}

export default new UserConsumer();
