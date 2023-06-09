import React, { useContext } from "react";
import { useSelector } from "react-redux";

import {
  SummaryWrapper,
  TotalProduct,
  TotalProductBottom,
  DeliveryEstimation,
  Label,
  Estimation,
  TotalDelivery,
  TotalDetail,
  TotalTitle,
  TotalValue,
  TotalPayment,
  TotalPaymentTitle,
  TotalPaymentValue,
} from "./styles";

import { AppContext } from "../../../../context/AppContext";
import TitleSummary from "../../../TitleSummary";

const Summary = () => {
  const { currencyFormatter } = useContext(AppContext);
  const checkout = useSelector((state) => state.checkout);

  const totalPayment =
    500000 +
    Number(checkout.dropShippingFee) +
    Number(checkout.summary.cost);

  return (
    <SummaryWrapper>
      <TitleSummary/>
      <TotalProduct>10 items purchased</TotalProduct>
      <TotalProductBottom />

      <DeliveryEstimation>
        <Label>Delivery estimation</Label>
        <Estimation>
          {checkout.summary.hasOwnProperty("cost")
            ? `
          ${checkout.summary.estimate} by ${checkout.summary.shipmentName}
          `
            : "Please Choose Shipment!"}
        </Estimation>
      </DeliveryEstimation>

      <DeliveryEstimation>
        <Label>Payment method</Label>
        <Estimation>Bank Transfer</Estimation>
      </DeliveryEstimation>

      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>{currencyFormatter(500000)}</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>Dropshipping Fee</TotalTitle>
          <TotalValue>
            <TotalValue>
              {currencyFormatter(checkout.dropShippingFee)}
            </TotalValue>
          </TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>
            <b>{checkout.summary.shipmentName}</b> shipment
          </TotalTitle>
          <TotalValue>
            {checkout.summary.hasOwnProperty("cost")
              ? currencyFormatter(checkout.summary.cost)
              : 0}
          </TotalValue>
        </TotalDetail>
        <TotalPayment>
          <TotalPaymentTitle>Total</TotalPaymentTitle>
          <TotalPaymentValue>
            {checkout.summary.hasOwnProperty("cost")
              ? currencyFormatter(totalPayment)
              : currencyFormatter(500000) +
                currencyFormatter(checkout.dropShippingFee)}
          </TotalPaymentValue>
        </TotalPayment>
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default Summary;
