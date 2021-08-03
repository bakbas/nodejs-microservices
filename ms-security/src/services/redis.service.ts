import redisClient from "../configs/redis.config";

class RedisService {
    public async set(key: string, value: string): Promise<Error | boolean> {
        return new Promise((resolve) => {
            redisClient.setex(key, 3600, value, (err) => {
                resolve(err || true);
            }); //3600 second = 1h
        });
    }

    public async get(key: string): Promise<Error | string | null> {
        return new Promise((resolve) => {
            redisClient.get(key, (err, reply) => {
                resolve(err || reply);
            });
        });
    }
}

export default new RedisService();
