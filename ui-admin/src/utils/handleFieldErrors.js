import isEmpty from "lodash/isEmpty";

export const handleFieldErrors = (list) => {
    const errors = {};
    list?.forEach((item) => {
        item.field && (errors[item.field] = item.description);
    });
    return isEmpty(errors) ? null : errors;
};
