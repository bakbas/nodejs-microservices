import { CompressionTypes } from "kafkajs";
import kafka from "../configs/kafka.config";

class ProducerService {
    constructor(private producer = kafka.producer()) {
        console.log("ProducerService");
    }

    async send(messages: unknown, topic: string) {
        await this.producer.connect();
        await this.producer.send({
            messages: [{ value: JSON.stringify(messages) }],
            topic,
            compression: CompressionTypes.GZIP
        });
        await this.producer.disconnect();
    }
}

export default new ProducerService();
