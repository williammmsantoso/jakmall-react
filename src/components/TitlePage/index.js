import React from "react";
import { Title, TitlePageBorder, TitlePageWrapper } from "./style";

const TitlePage = ({ title }) => {
    return <TitlePageWrapper>
        <Title>{title}</Title>
        <TitlePageBorder />
    </TitlePageWrapper>
}

export default TitlePage