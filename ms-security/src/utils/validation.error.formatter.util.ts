import { ValidationError } from "class-validator";

const ValidationErrorFormatter = (errors: ValidationError[]) => {
    const validation = errors.reduce((res, error: ValidationError) => {
        const { property, constraints } = error;
        const [first] = Object.keys(constraints as {});
        return { ...res, [property]: constraints?.[first] };
    }, {});

    return { validation };
};

export default ValidationErrorFormatter;
