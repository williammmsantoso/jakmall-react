import styled from "styled-components";

export const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  
  margin: 30px auto 0 auto;
  width: 100%;
  height: 60px;
  border: none;

  background: #ff8a00;
  color: #fff;


  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
