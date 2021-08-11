import { currencies } from "./getCurrencies";

const api = {
    login: () => Promise.resolve({ data: { token: true } }),
    getCurrencies: () =>
        Promise.resolve({
            data: currencies
        })
};

export default api;
