import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  SummaryWrapper,
  TotalProduct,
  TotalDelivery,
  TotalDetail,
  TotalTitle,
  TotalValue,
  TotalPayment,
  TotalPaymentTitle,
  TotalPaymentValue,
} from "./styles";

import { addDeliveryDetails } from "../../../../redux/store/actions/checkout.action";

import { AppContext } from "../../../../context/AppContext";
import Button from "../../../Button";
import TitleSummary from "../../../TitleSummary";

const Summary = () => {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.checkout);
  const { currencyFormatter } = useContext(AppContext);

  const onAddDeliveryDetails = () => {
    dispatch(addDeliveryDetails());
  };

  const totalPayment = 500000 + checkout.dropShippingFee;

  return (
    <SummaryWrapper>
      <TitleSummary/>
      <TotalProduct>10 items purchased</TotalProduct>
      <TotalDelivery>
        <TotalDetail>
          <TotalTitle>Cost of goods</TotalTitle>
          <TotalValue>{currencyFormatter(500000)}</TotalValue>
        </TotalDetail>
        <TotalDetail>
          <TotalTitle>Dropshipping Fee</TotalTitle>
          <TotalValue>{currencyFormatter(checkout.dropShippingFee)}</TotalValue>
        </TotalDetail>
        <TotalPayment>
          <TotalPaymentTitle>Total</TotalPaymentTitle>
          <TotalPaymentValue>
            {" "}
            {currencyFormatter(totalPayment)}
          </TotalPaymentValue>
        </TotalPayment>
        <Button
          title="Continue to Payment"
          onClick={() => onAddDeliveryDetails()}
        />
      </TotalDelivery>
    </SummaryWrapper>
  );
};

export default Summary;
