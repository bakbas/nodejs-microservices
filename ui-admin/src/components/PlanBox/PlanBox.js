import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { string, func, bool, number } from "prop-types";

import {
    Item,
    Content,
    Title,
    Text,
    Input,
    Button,
    Note
} from "./PlanBox.styles";

export const PlanBox = ({
    title,
    dailyProfit,
    totalReturn,
    days,
    complationDays,
    index,
    stakeEvent,
    instant = false,
    inputOnChange,
    profit
}) => {
    const { t } = useTranslation();
    const [amount, setAmount] = useState();

    function onChange(e) {
        let complationDays = "...";
        setAmount(e.target.value);

        if (e.target.value) {
            const value = parseFloat(e.target.value);
            complationDays = (value * profit).toFixed(1);
        }

        inputOnChange({ complationDays, index });
    }

    function onStake() {
        stakeEvent({ amount, index });
    }

    return (
        <Item data-id={`card-${index}`}>
            <Content instant={instant}>
                <Title instant={instant}>{title}</Title>
                <Text instant={instant}>
                    {t("planBox.dailyProfit")}
                    <span>{dailyProfit}%</span>
                </Text>
                <Text instant={instant}>
                    {t("planBox.totalReturn")}
                    <span>{totalReturn}%</span>
                </Text>
                <Text instant={instant}>
                    {t("planBox.withdrawTime")}
                    <span>
                        {instant
                            ? t("general.anyTime")
                            : t("general.endOfPlan")}
                    </span>
                </Text>
                <Text instant={instant}>
                    {t("planBox.days")}
                    <span>{days}</span>
                </Text>
                <Text instant={instant}>
                    {t("planBox.complationDays", {
                        days: days
                    })}
                    <span>{complationDays}</span>
                </Text>
                <Text>
                    <Input
                        type="number"
                        placeholder="Enter Amount"
                        onChange={onChange}
                    />
                </Text>
                <Button instant={instant} onClick={onStake}>
                    {t("planBox.stakeButton")}
                </Button>
                {!instant && <Note>{t("planBox.note")}</Note>}
            </Content>
        </Item>
    );
};

PlanBox.propTypes = {
    title: string,
    dailyProfit: string,
    totalReturn: string,
    days: string,
    complationDays: string,
    index: number,
    stakeEvent: func,
    instant: bool,
    inputOnChange: func,
    profit: string
};
