import styled from "styled-components";

export const FinishContainer = styled.div`
  position: relative;
`;

export const FinishWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  gap: 30px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;