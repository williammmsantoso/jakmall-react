import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import {
  ShipmentWrapper,
  ShipmentList,
  ShipmentItem,
  ShipmentItemTitle,
  ShipmentItemValue,
} from "./styles";

import { AppContext } from "../../../../context/AppContext";

import { CHECKOUT_SHIPPING_FEE } from "../../../../redux/actionTypes";
import TitlePage from "../../../TitlePage";

const Shipment = ({ data }) => {
  const dispatch = useDispatch();

  const { currencyFormatter } = useContext(AppContext);
  const [active, setActive] = useState(0);

  const shipmentActive = (item, i) => {
    dispatch({
      type: CHECKOUT_SHIPPING_FEE,
      payload: item,
    });
    setActive(i);
  };

  return (
    <ShipmentWrapper>
        <TitlePage title="Shipment" />

        <ShipmentList>
            {data.map((item, i) => (
            <ShipmentItem
                active={i === active ? i : ""}
                key={i}
                onClick={() => shipmentActive(item, i)}
            >
                <ShipmentItemTitle>{item.shipmentName}</ShipmentItemTitle>
                <ShipmentItemValue>
                {currencyFormatter(item.cost)}
                </ShipmentItemValue>
            </ShipmentItem>
            ))}
        </ShipmentList>
    </ShipmentWrapper>
  );
};

export default Shipment;
