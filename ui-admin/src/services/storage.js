import lscache from "lscache";

if (process.env.NODE_ENV !== "production") {
    lscache.enableWarnings(true);
}

const storage = {};

const callLsCache = (action, key, data) => {
    if (lscache.supported()) {
        return lscache[action](key, data);
    }
};

storage.set = (key, data) => callLsCache("set", key, data);

storage.get = (key) => callLsCache("get", key);

storage.remove = (key) => callLsCache("remove", key);

storage.flush = () => callLsCache("flush");

export default storage;
