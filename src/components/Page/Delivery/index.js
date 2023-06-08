import React, { useCallback, useState } from "react";
import TitlePage from "../../TitlePage";
import { DeliveryContainer, FormSection } from "./styles";
import FormDelivery from "./FormDelivery";
import Summary from "./Summary";
import { useDispatch } from "react-redux";
import { CHECKOUT_DROPSHIPPING_FEE } from "../../../redux/actionTypes";
import Checkbox from "../../Checkbox";

function Delivery() {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const onChange = useCallback(e => {
        setChecked(!checked);
        
        console.log(checked);
        
        dispatch({ type: CHECKOUT_DROPSHIPPING_FEE, payload: checked ? 5900 : 0 });
    }, []);

    return <DeliveryContainer>
        <FormSection>
            <div className="d-flex items-center justify-between">
                <TitlePage title="Delivery details" />
                <Checkbox label="Send as dropshipper" checked={checked} setChecked={onChange} />
            </div>

            <FormDelivery />
        </FormSection>


        <Summary />
    </DeliveryContainer>
}

export default Delivery;