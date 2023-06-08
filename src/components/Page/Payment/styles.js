import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  gap: 30px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;