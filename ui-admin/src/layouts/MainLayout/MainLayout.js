import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { Wrapper } from "./MainLayout.styles";

export const MainLayout = ({ children }) => {
    return (
        <>
            <Wrapper>
                <Header />
                <div className="container">{children}</div>
                <Footer />
            </Wrapper>
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};
