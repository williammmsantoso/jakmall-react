import React from "react";

import { CheckoutContainer } from "./styles";
import Navigator from "../Navigator";

import Delivery from "../Delivery";

const Checkout = () => {
  return (
    <CheckoutContainer>
      <Navigator active={1} />

      <Delivery/>
    </CheckoutContainer>
  );
};

export default Checkout;
