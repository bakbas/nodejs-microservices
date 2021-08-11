import React from "react";
import { node } from "prop-types";

import { Button as StyledButton } from "./Button.styles";

export const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
    children: node
};
