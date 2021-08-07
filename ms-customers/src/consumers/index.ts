import customerConsumer from "./customer.consumer";

class Consumers {
    public async run() {
        await customerConsumer.run();
    }
}

export default new Consumers();
