import styled from "@emotion/styled";

export const Panel = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2.5rem;
`;

export const Contract = styled.div`
    border: 0.0625rem solid #dbf450;
    box-shadow: 0 0 3.125rem 0 rgb(0 0 0 / 80%);
    border-radius: 1rem;
    padding: 0.625rem 1.25rem 0 1.25rem;
    width: 15rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

    @media screen and (max-width: 37rem) {
        width: 100%;
    }

    span {
        font-size: 0.75rem;
        font-weight: 600;
        display: block;

        a {
            color: white;
            background: rgba(29, 74, 100, 0.7);
            border-radius: 0.25rem;
            padding: 0.125rem 0.3125rem;
            font-weight: 500;
            margin-left: 1.25rem;
        }
    }

    div {
        font-size: 2.25rem;
        font-weight: 700;
        color: #fff;
        margin: 0.625rem 0 1.25rem 0;
    }
`;

export const Info = styled.div`
    width: calc(100% - 18rem);
    margin-left: 3rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

    @media screen and (max-width: 37rem) {
        width: 100%;
        margin: 2rem 0 0 0;

        ul {
            list-style-position: inside;
        }
    }

    li {
        font-size: 0.9rem;
        line-height: 1.8rem;
        font-weight: 600;
        position: relative;
    }
`;

export const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 2rem -1.25rem 0 -1.25rem;

    @media screen and (max-width: 37rem) {
        margin-top: 0;
    }
`;

export const Rules = styled.ol`
    color: #fff;
    list-style-position: inside;

    li {
        font-size: 0.9rem;
        line-height: 1.8rem;
        font-weight: 600;
    }
`;

export const Stake = styled.div`
    border: 0.0625rem solid #dbf450;
    box-shadow: 0 0 3.125rem 0 rgb(0 0 0 / 80%);
    border-radius: 1rem;
    padding: 1.25rem;
    width: 22rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

    @media screen and (max-width: 44rem) {
        width: 100%;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    span {
        font-size: 0.75rem;
        font-weight: 500;
    }

    div {
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    button {
        margin-top: 0.5rem;
        width: 10rem;
    }
`;

export const Referral = styled.div`
    padding: 0.9375rem;
    font-size: 0.75rem;
    font-weight: 500;
    width: calc(100% - 23.5rem);
    margin-left: 1.5rem;
    border: 0.0625rem solid #dbf450;
    border-radius: 1rem;
    box-shadow: 0 0 3.125rem 0 rgb(0 0 0 / 80%);

    @media screen and (max-width: 44rem) {
        width: 100%;
        margin: 2.5rem 0 0 0;
    }
`;

export const Link = styled.div`
    margin-bottom: 1.25rem;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-end;

    label {
        font-weight: 600;
        display: inline-block;
        width: calc(100% - 6rem);
        margin-right: 1rem;
    }

    input {
        background: transparent;
        border-radius: 0.1875rem;
        border: 0.0625rem solid #d1d1d1;
        padding: 0.625rem;
        width: 100%;
        display: block;
        margin-top: 0.625rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #fff;
        outline: none;
    }

    button {
        width: 5rem;
        height: 2.25rem;
        font-size: 0.875rem;
        margin-bottom: 0.125rem;
    }
`;

export const Scores = styled.div`
    display: flex;
`;

export const ScoresCol = styled.div`
    height: 100%;

    &:first-of-type {
        width: 62%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }

    &:last-child {
        width: 38%;
    }
`;

export const ScoresResult = styled.div`
    margin: 0 1.875rem 3.125rem;
    line-height: 1rem;
    font-weight: 600;

    &:last-child {
        margin-bottom: 0;
    }

    div {
        font-size: 2.25rem;
        font-weight: 700;
        color: #dbf450;
        margin-top: 0.625rem;
    }
`;

export const ScoresText = styled.div`
    line-height: 1rem;
    margin-top: 0.25rem;
`;

export const Deposits = styled.div`
    display: flex;
    margin: 0 -1.25rem;
    flex-wrap: wrap;
`;

export const Deposit = styled.div`
    padding: 1.25rem;
    flex-basis: 33.33333%;

    .deposit-content {
        width: 100%;
        border: 0.0625rem solid #dbf450;
        border-radius: 1rem;
        box-shadow: 0 0 3.125rem 0 rgb(0 0 0 / 80%);
        position: relative;
        padding: 0.625rem;

        h2 {
            position: absolute;
            top: 0.25rem;
            left: 0.625rem;
            font-size: 1rem;
            font-weight: 700;
            color: #dbf450;
        }

        .deposit-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.9375rem;

            .deposit-score {
                font-size: 0.75rem;
                font-weight: 700;
                color: #fff;

                span {
                    display: block;
                    font-size: 2.25rem;
                    font-weight: 700;

                    &:last-child {
                        text-align: right;
                    }
                }
            }

            .deposit-text {
                padding-left: 7.8125rem;
                margin-top: -0.3125rem;
                font-size: 0.75rem;
                font-weight: 500;
                color: #fff;
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
        }

        .deposit-range {
            border-radius: 6.25rem;
            background: #fff;
            width: 100%;
            position: relative;
            overflow: hidden;

            div {
                background-color: #dbf450;
                text-align: right;
                padding: 0.125rem 0.3125rem;
                font-size: 0.6875rem;
                font-weight: 700;
                color: #1e2026;
            }
        }
    }

    &.saving {
        .deposit-content {
            border: 0.0625rem solid #00e6ff;
            box-shadow: 0 0 3.125rem 0 rgba(0, 0, 0, 0.8);

            h2 {
                color: #00e6ff;
            }

            .deposit-range {
                div {
                    background-color: #00e6ff;
                }
            }
        }
    }
`;
