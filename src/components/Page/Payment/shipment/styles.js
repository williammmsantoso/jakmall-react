import styled from "styled-components";

export const ShipmentWrapper = styled.div`
  position: relative;
`;

export const ShipmentList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ShipmentItem = styled.div`
  width: 180px;
  background: ${(props) => (props.active ? "rgba(27, 217, 123, 0.1)" : "#fff")};
  border: ${(props) =>
    props.active ? "2px solid #1bd97b" : "1px solid #cccccc"};
  padding: 11px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const ShipmentItemActive = styled.div`
  width: 180px;
  background: rgba(27, 217, 123, 0.1);
  border: 2px solid #1bd97b;
  padding: 11px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const ShipmentItemTitle = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 15.73px;
`;

export const ShipmentItemValue = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
`;
