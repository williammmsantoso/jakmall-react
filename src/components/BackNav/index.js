import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { BackNavContainer, Title, LeftIcon } from "./styles";

const BackNav = ({ onClickBack, title }) => {
    return <BackNavContainer onClick={onClickBack} >
        <LeftIcon>
            <ArrowBackIcon />
        </LeftIcon>
        <Title>{title}</Title>
    </BackNavContainer>
}

export default BackNav