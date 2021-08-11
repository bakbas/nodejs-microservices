import { queryHelpers, buildQueries } from "@testing-library/react";

const queryAllByDataId = (...args) =>
    queryHelpers.queryAllByAttribute("data-id", ...args);

const getMultipleError = (c, dataCyValue) =>
    `Found multiple elements with the data-id attribute of: ${dataCyValue}`;

const getMissingError = (c, dataCyValue) =>
    `Unable to find an element with the data-id attribute of: ${dataCyValue}`;

const [
    queryByDataId,
    getAllByDataId,
    getByDataId,
    findAllByDataId,
    findByDataId
] = buildQueries(queryAllByDataId, getMultipleError, getMissingError);

export {
    queryByDataId,
    queryAllByDataId,
    getByDataId,
    getAllByDataId,
    findAllByDataId,
    findByDataId
};
