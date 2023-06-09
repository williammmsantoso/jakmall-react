import React from "react";
import TitlePage from "../../TitlePage";
import { DeliveryContainer, FormSection } from "./styles";
import FormDelivery from "./FormDelivery";
import Summary from "./Summary";
import { FormControlLabel } from "@mui/material";
import MemoCheckbox from "../../MemoCheckbox";
import { CHECKOUT_DROPSHIPPING_FEE } from "../../../redux/actionTypes";
import { useDispatch } from "react-redux";

const Delivery = () => {
    const dispatch = useDispatch();
    
    const onChange = (e) => {
        // console.log(e.target.checked)
        dispatch({ type: CHECKOUT_DROPSHIPPING_FEE, payload: e.target.checked ? 5900 : 0 });
    }

    return <DeliveryContainer>
        <FormSection>
            <div className="d-flex items-center justify-between">
                <TitlePage title="Delivery details" />

                <FormControlLabel
                    control={<MemoCheckbox checkboxChange={onChange} />}
                    label="Send as dropshipper"
                />
            </div>

            <FormDelivery />
        </FormSection>


        <Summary />
    </DeliveryContainer>
}

export default Delivery;