import { ValidationError } from "class-validator";

const ErrorFormatter = (errors: ValidationError[]) => {
    const validation = errors.reduce((res, error: ValidationError) => {
        const { property, constraints } = error;
        return { ...res, [property]: constraints };
    }, {});

    return { validation };
};

export default ErrorFormatter;
