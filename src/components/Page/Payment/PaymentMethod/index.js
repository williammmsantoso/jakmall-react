import React, { useContext } from "react";

import { PaymentMethodWrapper } from "./styles";

import { AppContext } from "../../../../context/AppContext";
import TitlePage from "../../../TitlePage";
import InputListValue from "../../../InputListValue";

const PaymentMethod = () => {
  const {
    isEWallet,
    isBankTransfer,
    isVirtualAccount,
    eWalletActive,
    bankTransferActive,
    virtualAccountActive,
  } = useContext(AppContext);

  const initialValue = [
    {
      id: 0,
      title: "e-Wallet",
      value: "1,500,000 left",
      onClick: eWalletActive,
      isActive: isEWallet,
    },
    {
      id: 1,
      title: "Bank Transfer",
      value: "",
      onClick: bankTransferActive,
      isActive: isBankTransfer,
    },
    {
      id: 2,
      title: "Virtual Account",
      value: "",
      onClick: virtualAccountActive,
      isActive: isVirtualAccount,
    },
  ]

  return (
    <PaymentMethodWrapper>
      <TitlePage title="Payment" />

      <InputListValue data={initialValue} />
    </PaymentMethodWrapper>
  );
};

export default PaymentMethod;
