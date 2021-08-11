import axios from "axios";

import { initAxiosInterceptors } from "./interceptors";

initAxiosInterceptors();

const api = {
    login: (data) =>
        axios.post(`${process.env.SECURITY_ENDPOINT}/users/login`, data),
    getCurrencies: () =>
        axios.get(`${process.env.LOAN_ACCOUNT_ENDPOINT}/products/currency`)
};

export default api;
