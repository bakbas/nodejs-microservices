import { renderHook } from "SRC/test-utils";
import * as yup from "yup";
import { format, add } from "date-fns";

import { useValidation } from "../useValidation";

const generateExpiredDate = () =>
    format(
        add(new Date(), {
            months: 1
        }),
        "dd/MM/yyyy"
    );

const generateEffectiveDate = () => format(new Date(), "dd/MM/yyyy");

describe("Form validating tested", () => {
    const { result } = renderHook(() => useValidation());
    const validations = result.current;

    test("General validations should be valid", async () => {
        const data = {
            description: "description",
            sortCode: "11-22-33",
            effectiveDate: generateEffectiveDate(),
            expiredDate: generateExpiredDate(),
            minLoan: "1000",
            maxLoan: 2000,
            minAge: 18,
            maxAge: 70,
            selectedDate: generateExpiredDate()
        };
        const schema = yup.object({
            description: validations.description,
            sortCode: validations.sortCode,
            effectiveDate: validations.effectiveDate,
            expiredDate: validations.expiredDate,
            minLoan: validations.minLoan,
            maxLoan: validations.maxLoan(2000),
            minAge: validations.minAge,
            maxAge: validations.maxAge,
            selectedDate: validations.isEqualAfterSelectedAndTodayDate(null)
        });
        const validatedData = await schema.validate(data);

        expect(validatedData).toEqual(data);
    });

    test("Expired date should be valid", async () => {
        const data = { expiredDate: generateExpiredDate() };
        const schema = yup.object({
            expiredDate: validations.expiredDate
        });
        const validatedData = await schema.validate(data);
        expect(validatedData).toEqual(data);
    });

    test("Max age should be valid", async () => {
        const data = { maxAge: 60 };
        const schema = yup.object({
            maxAge: validations.maxAge
        });
        const validatedData = await schema.validate(data);
        expect(validatedData).toEqual(data);
    });

    test("Max loan amount should be valid", async () => {
        const data = { maxLoan: 1000 };
        const schema = yup.object({
            maxLoan: validations.maxLoan(null)
        });
        const validatedData = await schema.validate(data);
        expect(validatedData).toEqual(data);
    });

    test("Date should be equal generated date", async () => {
        const date = generateExpiredDate();
        const data = { selectedDate: date };
        const schema = yup.object({
            selectedDate: validations.isEqualAfterSelectedAndTodayDate(date)
        });
        const validatedData = await schema.validate(data);
        expect(validatedData).toEqual(data);
    });
});
