import styled from "@emotion/styled";

export const Button = styled.button`
    padding: 0 1.25rem;
    background: transparent;
    font-weight: 700;
    font-size: 0.8125rem;
    color: ${(props) => (props.instant ? "#dbf450" : "#00e6ff")};
    box-shadow: 0 0.125rem 2.5rem 0 rgb(0 0 0 / 60%);
    border: 0.0625rem solid
        ${(props) => (props.instant ? "#dbf450" : "#00e6ff")};
    border-radius: 0.1875rem;
    height: 1.875rem;
`;
