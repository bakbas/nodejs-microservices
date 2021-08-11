import React from "react";
import { string, object, bool, oneOfType } from "prop-types";
import { InputField } from "COMPONENTS";
import NumberFormat from "react-number-format";

export const MaskedField = ({
    fullWidth = true,
    margin = "none",
    error = false,
    id,
    inputProps = {},
    ...props
}) => {
    return (
        <NumberFormat
            id={id}
            fullWidth={fullWidth}
            margin={margin}
            error={!!error}
            helperText={error}
            customInput={InputField}
            inputProps={{ "data-id": id, ...inputProps }}
            {...props}
        />
    );
};

MaskedField.propTypes = {
    id: string.isRequired,
    inputProps: oneOfType([object]),
    fullWidth: string,
    margin: string,
    error: oneOfType([string, bool])
};
