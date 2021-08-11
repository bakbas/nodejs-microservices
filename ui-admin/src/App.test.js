import React from "react";

import { renderWithRouter, act } from "SRC/test-utils";

import App from "./App";

describe("<App />", () => {
    it("Should render App component", async () => {
        let app;
        await act(async () => {
            app = renderWithRouter(<App />);
        });
        expect(app.baseElement).toBeInTheDocument();
    });
});
