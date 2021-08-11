import { handleFieldErrors } from "../handleFieldErrors";

describe("Field errors tested", () => {
    test("expected an object with form field name", async () => {
        const errors = [
            {
                code: "2001",
                description: "descriptions",
                field: "fieldName"
            }
        ];

        expect(handleFieldErrors(errors)).toEqual({
            fieldName: "descriptions"
        });
    });

    test("expected null", async () => {
        const errors = [
            {
                code: "2001",
                description: "descriptions"
            }
        ];

        expect(handleFieldErrors(errors)).toEqual(null);
    });
});
