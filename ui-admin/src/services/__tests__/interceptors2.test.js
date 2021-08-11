import axios from "axios";
import { initAxiosInterceptors } from "../interceptors";

jest.mock("../storage", () => ({
    get: jest.fn(() => null),
    remove: jest.fn()
}));

describe("axios interceptors", () => {
    initAxiosInterceptors();

    it("request header use testing 2", async () => {
        const config = { headers: { param: "param" } };

        const success = axios.interceptors.request.handlers[0].fulfilled(
            config
        );

        expect(success).toEqual(config);
    });
});
