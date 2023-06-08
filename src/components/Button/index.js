import React from "react";

import { DefaultButton } from "./styles";

const Button = ({ title, onClick, disabled }) => {
  return <DefaultButton
    onClick={!disabled ? onClick : () => {}}
  >
    {title}
  </DefaultButton>;
}

export default Button;
