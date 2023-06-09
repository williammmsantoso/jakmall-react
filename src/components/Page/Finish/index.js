import React from "react";
import { FinishContainer, FinishWrapper } from "./styles";
import OrderSummary from "./OrderSummary";
import Summary from "./Summary";

const Finish = () => {
    return <FinishContainer>
        <FinishWrapper>
            <OrderSummary/>
            <Summary/>
        </FinishWrapper>
    </FinishContainer>
}

export default Finish;