import {
    parse,
    format,
    isEqual,
    isAfter,
    isValid,
    startOfYesterday
} from "date-fns";

import { DATE_TIME } from "./constants";

export const formatDate = (date, currentFormat, targetFormat) => {
    const parsed = parse(date, currentFormat, new Date());
    return format(parsed, targetFormat);
};

export const isDateValid = (value) => {
    const parsedDate = parse(value, DATE_TIME.DATE_FORMAT, new Date());
    return isValid(parsedDate);
};

export const isDateAfterYesterday = (value) => {
    const parsedDate = parse(value, DATE_TIME.DATE_FORMAT, new Date());
    return isAfter(parsedDate, startOfYesterday());
};

export const isDateEqualAfterSelectedDate = (value, selectedDate) => {
    const parsedDate = parse(value, DATE_TIME.DATE_FORMAT, new Date());
    const parsedSelectedDate = parse(
        selectedDate,
        DATE_TIME.DATE_FORMAT,
        new Date()
    );

    return isEqual(parsedDate, parsedSelectedDate)
        ? true
        : isAfter(parsedDate, parsedSelectedDate);
};
