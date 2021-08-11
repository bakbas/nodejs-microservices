import merge from "lodash/merge";

export const appReducer = (state, { type, payload }) => {
    const newState = { ...state };
    if (type) {
        newState[type] = payload;
    }
    return type ? newState : merge({}, newState, payload);
};
