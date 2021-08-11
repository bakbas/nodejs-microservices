import React from "react";
import { string } from "prop-types";

import { Input } from "./InputField.styles";

export const InputField = ({ id, ...props }) => {
    return <Input id={id} {...props} />;
};

InputField.propTypes = {
    id: string
};
