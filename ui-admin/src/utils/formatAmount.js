import { CURRENCIES } from "./constants";

export const formatAmount = (currency, value, decimalSize = 2) => {
    const symbol = CURRENCIES[currency];
    const isNegative = value < 0;
    const formatedSymbol = isNegative ? `-${symbol}` : symbol;

    return `${formatedSymbol} ${Math.abs(value)
        .toFixed(decimalSize)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
