import styled from "@emotion/styled";
import { Button as ButtonComponent } from "COMPONENTS";

export const Item = styled.div`
    padding: 1.5rem 1.25rem;
    width: 33.33333%;

    @media screen and (max-width: 53rem) {
        width: 50%;
    }

    @media screen and (max-width: 35rem) {
        width: 100%;
    }
`;

export const Content = styled.div`
    border: 0.0625rem solid
        ${(props) => (props.instant ? "#dbf450" : "#00e6ff")};
    border-radius: 1rem;
    box-shadow: 0 0 3.125rem 0 rgba(0, 0, 0, 0.8);
    width: 100%;
    position: relative;
    padding: 1.5rem 1.875rem 2.5rem;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    color: ${(props) => (props.instant ? "#dbf450" : "#00e6ff")};
    margin-bottom: 0.625rem;
    font-weight: 600;
`;

export const Text = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:last-of-type {
        margin-bottom: 0;
    }

    span {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${(props) => (props.instant ? "#dbf450" : "#00e6ff")};
    }
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    outline: none;
    border: 0;
    padding: 0.5rem;
    width: 100%;
    margin-top: 0.5rem;
    text-align: center;
`;

export const Button = styled(ButtonComponent)`
    width: 100%;
    margin-top: 1.25rem;
    height: 2.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
`;

export const Note = styled.span`
    position: absolute;
    width: 100%;
    bottom: 0.5rem;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.75);
    z-index: 1;
    left: 0;
`;
