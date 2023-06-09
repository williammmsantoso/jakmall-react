import React from "react";
import { Title } from "./styles";

const TitleSummary = ({ title }) => {
    return <Title>{title ? title : "Summary"}</Title>
}

export default TitleSummary;