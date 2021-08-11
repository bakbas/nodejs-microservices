import axios from "axios";
import { initAxiosInterceptors } from "../interceptors";

jest.mock("../storage", () => ({
    get: jest.fn(() => "token"),
    remove: jest.fn()
}));

describe("axios interceptors", () => {
    initAxiosInterceptors();

    it("request header use testing", async () => {
        const config = { headers: { param: "param" } };

        const success = axios.interceptors.request.handlers[0].fulfilled(
            config
        );

        expect(success).toEqual({
            headers: { param: "param", Authorization: "token" }
        });
    });

    it("success response testing", async () => {
        const res = {
            response: {
                status: 200,
                data: {
                    success: "succcess"
                }
            }
        };

        const success = axios.interceptors.response.handlers[0].fulfilled(res);

        expect(success).toEqual(res);
    });

    it("error response with field testing", async () => {
        const res = {
            response: {
                status: 404,
                data: {
                    errors: [
                        {
                            code: "404",
                            description: "Undefined",
                            field: "fieldName"
                        }
                    ]
                }
            }
        };

        const error = axios.interceptors.response.handlers[0].rejected(res);

        await expect(error).rejects.toMatchObject(res);
    });

    it("error handling testing", async () => {
        const res = {
            message: "Network Error"
        };

        const error = axios.interceptors.response.handlers[0].rejected(res);

        await expect(error).rejects.toMatchObject(res);
    });

    it("error response with redirect to logout testing", async () => {
        delete window.location;
        window.location = { replace: jest.fn() };

        const res = {
            response: {
                status: 401,
                data: {
                    errors: [
                        {
                            code: "6100",
                            description: "logout"
                        }
                    ]
                }
            }
        };

        const error = axios.interceptors.response.handlers[0].rejected(res);

        expect(window.location.replace).toBeCalledWith("/login");
        await expect(error).rejects.toMatchObject(res);
    });
});
