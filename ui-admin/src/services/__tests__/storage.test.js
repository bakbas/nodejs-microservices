import storage from "../storage";

jest.mock("lscache", () => ({
    enableWarnings: jest.fn(),
    supported: jest.fn(() => true),
    set: jest.fn(() => true),
    get: jest.fn(() => true),
    remove: jest.fn(() => true),
    flush: jest.fn(() => true)
}));

describe("storage tested", () => {
    const dataset = [["get"], ["set"], ["remove"], ["flush"]];
    test.each(dataset)(
        "Date should be converted to display formatted date",
        (func) => expect(storage[func]()).toEqual(true)
    );
});
