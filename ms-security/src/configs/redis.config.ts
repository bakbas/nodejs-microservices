import { createClient, RedisClient } from "redis";
import logger from "@utils/logger.util";

const { REDIS_URL } = process.env;

const redisClient = (): RedisClient => {
    const redisClient = createClient(REDIS_URL as string);
    redisClient.on("connect", () => {
        console.info(`redis connected ${redisClient.connected}`);
    });
    redisClient.on("error", (error) => {
        logger.error("Error connecting to redis .. " + error);
        throw new Error("Error connecting to redis .. " + error);
    });

    return redisClient;
};

export default redisClient();
