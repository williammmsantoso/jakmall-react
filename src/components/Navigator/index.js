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
        title: "Delivery"
    },
    {
        id: 2,
        title: "Payment"
    },
    {
        id: 3,
        title: "Finish"
    },
  ]

  return (
    <StepContainer>
        {
            data.map((item, idx) => {
                return <Step>
                    <StepItem>
                        <StepNumber active={item.id === active} >{item.id}</StepNumber>
                        <StepTitle active={item.id === active} >{item.title}</StepTitle>
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
