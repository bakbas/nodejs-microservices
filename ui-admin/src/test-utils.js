import React from "react";
import { render, queries } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { I18nextProvider } from "react-i18next";

import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

import Providers from "./providers";
import * as customQueries from "./test-queries";
import i18n from "./test-i18n";

// Localization provider only for tests
// eslint-disable-next-line react/prop-types
const AllProviders = ({ children }) => (
    <I18nextProvider i18n={i18n}>
        <Providers>{children}</Providers>
    </I18nextProvider>
);

const customRender = (ui, options) =>
    render(ui, {
        wrapper: AllProviders,
        queries: {
            ...queries,
            ...customQueries
        },
        ...options
    });

const customRenderHook = (ui, options) =>
    renderHook(ui, {
        wrapper: AllProviders,
        ...options
    });

export const renderWithRouter = (ui, options = {}) => {
    const {
        path = "/",
        route = "/",
        history = createMemoryHistory({ initialEntries: [route] }),
        ...restOptions
    } = options;

    // eslint-disable-next-line react/prop-types
    const Wrapper = ({ children }) => (
        <Router history={history}>
            <AllProviders>
                <Route path={path}>{children}</Route>
            </AllProviders>
        </Router>
    );

    Wrapper.displayName = "Wrapper";

    return render(ui, {
        wrapper: Wrapper,
        queries: {
            ...queries,
            ...customQueries
        },
        ...restOptions
    });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

export { customRenderHook as renderHook };

export { default as userEvent } from "@testing-library/user-event";
