import React from "react";
import { CheckMark, CheckboxContainer, CheckboxLabel, CheckboxWrapper } from "./styles";

const Checkbox = ({ label, checked, setChecked }) => {
    return <CheckboxContainer onClick={setChecked}>
        <CheckboxWrapper checked={checked} >
            {checked && <CheckMark src="/check-mark.svg" alt="check" />}
        </CheckboxWrapper>
        <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
}

export default Checkbox;