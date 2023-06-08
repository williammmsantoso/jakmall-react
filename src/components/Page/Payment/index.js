import React from "react";
import { PaymentContainer, PaymentWrapper } from "./styles";
import Shipment from "./shipment";
import { useSelector } from "react-redux";
import PaymentMethod from "./PaymentMethod";
import Summary from "./Summary";

const Payment = () => {
    const { shipmentData } = useSelector((state) => state.checkout);

    return <>
        <PaymentContainer>
            <PaymentWrapper>
                <Shipment data={shipmentData} />
                <PaymentMethod />
            </PaymentWrapper>

            <Summary />
            
        </PaymentContainer>
    </>
}

export default Payment;