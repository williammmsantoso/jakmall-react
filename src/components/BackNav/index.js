import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { BackNavContainer, Title, LeftIcon } from "./styles";
import { useDispatch } from "react-redux";
import { CHECKOUT_BACK_DELIVERY } from "../../redux/actionTypes";

const BackNav = ({ step }) => {
    const dispatch = useDispatch();

    if (step !== "finish") {
        return <BackNavContainer onClick={step === "payment" ? () => dispatch({ type: CHECKOUT_BACK_DELIVERY }) : null} >
            <LeftIcon>
                <ArrowBackIcon />
            </LeftIcon>
            <Title>{step === "payment" ? "Back to delivery" : "Back to checkout"}</Title>
        </BackNavContainer>
    }
}

export default BackNav