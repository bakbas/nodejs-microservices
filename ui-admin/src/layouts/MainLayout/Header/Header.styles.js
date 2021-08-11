import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { LAYOUT } from "UTILS/constants";

export const Wrrapper = styled.div`
    border-bottom: 0.0625rem solid #dbf450;
`;

export const Container = styled.div`
    max-width: ${LAYOUT.CONTAINER_WIDTH};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
`;

export const Column = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 3rem;

    svg {
        width: 5rem;
    }
`;

export const Rate = styled.div`
    font-size: 0.875rem;
    font-weight: 700;
    margin-right: 1.25rem;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
`;

export const Item = styled.li`
    margin-right: 0.625rem;

    &:last-child {
        margin-right: 0;
    }

    a {
        background: transparent;
        font-weight: 600;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 5.625rem;
        height: 1.875rem;
        border-radius: 0.1875rem;
        box-shadow: 0 0.125rem 2.5rem 0 rgba(0, 0, 0, 0.6);
        padding: 0 0.75rem;
        text-decoration: none;
        border: 0.0625rem solid #00e6ff;
        color: #00e6ff;

        &:active {
            transform: translateY(0.0625rem);
        }
    }
`;
