import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CheckoutContainer } from "./styles";
import Navigator from "../Navigator";

import Delivery from "../Page/Delivery";
import BackNav from "../BackNav";
import Payment from "../Page/Payment";
import Finish from "../Page/Finish";
import { CHECKOUT_BACK_DELIVERY } from "../../redux/actionTypes";

const Checkout = () => {
  const dispatch = useDispatch();

  const { checkoutStep } = useSelector((state) => state.checkout);

  const ViewProcess = () => {
    if (checkoutStep === "payment") {
      return <Payment/>
    } else if (checkoutStep === "finish") {
      return <Finish/>
    } else {
      return <Delivery/>
    }
  }

  return (
    <CheckoutContainer>
      <Navigator active={checkoutStep} />
       <BackNav step={checkoutStep} />

      <ViewProcess/>
    </CheckoutContainer>
  );
};

export default Checkout;
