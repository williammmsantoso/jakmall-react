import React from "react";

import {
  StepContainer,
  Step,
  StepItem,
  StepNumber,
  StepTitle,
  RightIcon,
} from "./styles";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const Navigator = ({ active }) => {
  const data = [
    {
        id: 1,
        title: "Delivery",
        name: "delivery"
    },
    {
        id: 2,
        title: "Payment",
        name: "payment"
    },
    {
        id: 3,
        title: "Finish",
        name: "finish"
    },
  ]

  return (
    <StepContainer>
        {
            data.map((item, idx) => {
                return <Step key={idx}>
                    <StepItem>
                        <StepNumber active={item.name === active} >{item.id}</StepNumber>
                        <StepTitle active={item.name === active} >{item.title}</StepTitle>
                    </StepItem>

                    {
                        idx < 2 && <RightIcon>
                            <ArrowForwardIosIcon />
                        </RightIcon>
                    }
                </Step>
            })
        }
    </StepContainer>
  );
};

export default Navigator;
