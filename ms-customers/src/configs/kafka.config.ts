import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9093"]
});

export default kafka;
