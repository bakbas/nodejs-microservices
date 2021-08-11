import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";

import { AppContextProvider } from "SRC/context/AppContext";

import "react-toastify/dist/ReactToastify.css";

export const Providers = ({ children }) => {
    return (
        <Suspense fallback="loading">
            <ToastContainer />
            <AppContextProvider>{children}</AppContextProvider>
        </Suspense>
    );
};

Providers.propTypes = {
    children: PropTypes.node
};
