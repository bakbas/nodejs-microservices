import axios from "axios";
import { toast } from "react-toastify";

import storage from "./storage";

import { handleFieldErrors } from "UTILS";
import { TOKEN_KEY_NAME } from "SRC/utils/constants";

export const initAxiosInterceptors = () => {
    axios.interceptors.request.use((config) => {
        const token = storage.get(TOKEN_KEY_NAME);

        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    });

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            const { status, data = null } = error.response || {};
            toast.error(data?.errors[0].description || error?.message);

            if (
                status === 401 &&
                !["6103"].includes(String(data.errors[0].code))
            ) {
                storage.remove(TOKEN_KEY_NAME);
                window.location.replace("/login");
            }

            if (data?.errors?.length > 0)
                error.invalidFields = handleFieldErrors(data.errors);

            return Promise.reject(error);
        }
    );
};
