import React, { useState } from "react";
import TitlePage from "../../TitlePage";
import { DeliveryContainer, FormSection, DropshipperTitle } from "./styles";
import FormDelivery from "./FormDelivery";
import SummaryDelivery from "./SummaryDelivery";

const Delivery = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }

    return <DeliveryContainer>
        <FormSection>
            <div className="d-flex items-center justify-between">
                <TitlePage title="Delivery details" />

                <div id="inputPreview">
                    <input name="cssCheckbox" id="dropshipper" type="checkbox" class="css-checkbox" onChange={() => handleChange()} />
                    <label for="dropshipper">
                        <DropshipperTitle>Send as dropshipper</DropshipperTitle>
                    </label>
                </div>
            </div>

            <FormDelivery />
        </FormSection>


        <SummaryDelivery />
    </DeliveryContainer>
}

export default Delivery;