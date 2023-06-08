import React from "react";

import { CheckoutContainer } from "./styles";
import Navigator from "../Navigator";

import Delivery from "../Page/Delivery";
import BackNav from "../BackNav";

const Checkout = () => {
  return (
    <CheckoutContainer>
      <Navigator active={1} />
      <BackNav onClickBack={() => console.log('a')} title="Back to cart" />

      <Delivery/>
    </CheckoutContainer>
  );
};

export default Checkout;
