import React, { useState, useEffect, useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { appContext } from "CONTEXT/AppContext";
import { Button } from "COMPONENTS";

import {
    Wrrapper,
    Container,
    Column,
    Logo,
    Rate,
    List,
    Item
} from "./Header.styles";

export const Header = () => {
    const { t } = useTranslation();
    const { state } = useContext(appContext);
    const [bnbPrice, setBnbPrice] = useState("...");

    const shorter = (text) => `${text.slice(0, 6)}...${text.slice(-5)}`;

    useEffect(() => {
        async function getBNB() {
            const { binancecoin } = await fetch(
                "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
            ).then((res) => res.json());

            setBnbPrice(binancecoin.usd);
        }

        getBNB();
    }, []);

    return (
        <Wrrapper>
            <Container data-id="header">
                <Column>
                    <Button instant={!!state.wallet}>
                        {state.wallet
                            ? shorter(state.wallet)
                            : t("general.connectWallet")}
                    </Button>
                </Column>
                <Column>
                    <Rate>
                        1 BNB <span>= ${bnbPrice}</span>
                    </Rate>
                </Column>
            </Container>
        </Wrrapper>
    );
};
