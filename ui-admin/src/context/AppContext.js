import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { appReducer } from "./store/reducers";
import { initialState } from "./store/initialState";

export const appContext = createContext();

const { Provider } = appContext;

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
