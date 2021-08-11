import axios from "axios";

import api from "../api";

jest.mock("axios");

describe("APIs testing", () => {
    const res = { dummy: "data" };
    axios.get.mockResolvedValue(res);
    axios.post.mockResolvedValue(res);

    for (const key in api) {
        if (Object.hasOwnProperty.call(api, key)) {
            const API = api[key];
            it(`${key} api should be success`, async () => {
                await API().then((data) => expect(data).toEqual(res));
            });
        }
    }
});
