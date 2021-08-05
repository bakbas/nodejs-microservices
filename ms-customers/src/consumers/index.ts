import userConsumer from "./user.consumer";

class Consumers {
    public async run() {
        await userConsumer.run();
    }
}

export default new Consumers();
