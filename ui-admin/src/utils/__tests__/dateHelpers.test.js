import { formatDate } from "../dateHelpers";

describe("Date formatting tested", () => {
    const dataset = [["2020-12-01", "01/12/2020"]];
    test.each(dataset)(
        "Date should be converted to display formatted date",
        (inputDate, expectedDate) => {
            const formattedDate = formatDate(
                inputDate,
                "yyyy-MM-dd",
                "dd/MM/yyyy"
            );
            expect(formattedDate).toEqual(expectedDate);
        }
    );
});
