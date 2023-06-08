import styled from "styled-components";

export const StepContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 35px 10px;
  background: #fffae6;
  border-radius: 35px;
  
  transform: translate(-50%, 0);
  left: 50%;
  z-index: 1;
  top: -10px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`

export const StepItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StepNumber = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#ff8a00" : "#ffe4b8")};
  color: ${(props) => (props.active ? "#fff" : "#ff8a00")};
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    font-weight: 400;
    width: 20px;
    height: 20px;
    padding: 3px 0 0 6px;
  }
`;

export const StepTitle = styled.p`
  font-size: 16px;
  color: #ff8a00;
  font-style: normal;
  font-weight: 500;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const RightIcon = styled.svg`
  width: 24px;
  height: 24px;
  color: #ff8a00;
`;