import { ValidationError } from "class-validator";

const ErrorFormatter = (errors: ValidationError[]) => {
    const validation = errors.reduce((res, error: ValidationError) => {
        const { property, constraints } = error;
        const [first] = Object.keys(constraints as {});
        return { ...res, [property]: { [first]: constraints?.[first] } };
    }, {});

    return { validation };
};

export default ErrorFormatter;
