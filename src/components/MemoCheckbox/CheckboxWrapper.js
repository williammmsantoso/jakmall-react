import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CHECKOUT_DROPSHIPPING_FEE } from "../../redux/actionTypes";

const CheckboxWrapper = ({ children }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const onChange = () => {
        setChecked(!checked);

        dispatch({ type: CHECKOUT_DROPSHIPPING_FEE, payload: checked ? 5900 : 0 });
    }

    return <div onClick={() => onChange()}>
        {children}
    </div>
}

export default CheckboxWrapper

