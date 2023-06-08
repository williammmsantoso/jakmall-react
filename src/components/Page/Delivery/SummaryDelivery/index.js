import React from "react";

import {
  SummaryWrapper,
  Title,
  TotalProduct,
  TotalDelivery,
  TotalDetail,
  TotalTitle,
  TotalValue,
  TotalPayment,
  TotalPaymentTitle,
  TotalPaymentValue,
} from "./styles";

import Buttons from "../../../Buttons";

const SummaryDelivery = () => {

  const onAddDeliveryDetails = () => {};

  return (
    <SummaryWrapper>
      <Title>Summary</Title>
      <TotalProduct>10 items purchased</TotalProduct>
      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>{50000}</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>Dropshipping Fee</TotalTitle>
          <TotalValue>{2}</TotalValue>
        </TotalDetail>
        <TotalPayment>
          <TotalPaymentTitle>Total</TotalPaymentTitle>
          <TotalPaymentValue>
            {" "}
            {20000}
          </TotalPaymentValue>
        </TotalPayment>
        <Buttons
          title="Continue to Payment"
          onClick={() => onAddDeliveryDetails()}
        />
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default SummaryDelivery;
