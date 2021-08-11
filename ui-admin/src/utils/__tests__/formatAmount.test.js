import { formatAmount } from "../formatAmount";

describe("Balance amount formatting tested", () => {
    const dataset = [
        ["GBP", -306.14, "-£ 306.14"],
        ["GBP", 1000.0, "£ 1,000.00"],
        ["GBP", 555.5, "£ 555.50"]
    ];
    test.each(dataset)(
        "Balance amount should be converted to display currency symbol",
        (currency, inputAmount, expectedAmount) => {
            const formattedAmount = formatAmount(currency, inputAmount);
            expect(formattedAmount).toEqual(expectedAmount);
        }
    );
});
