import styled from "styled-components";

export const FormDeliveryWrapper = styled.div`
  margin-top: 36px;
`;

export const Form = styled.form`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: auto auto;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormWrapper = styled.div`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  border: 1px solid #cccccc;
  padding-left: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  font-weight: 300;
  color: #000000;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  border: none;
  border: 1px solid #cccccc;
  padding-left: 16px;
  padding-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  font-weight: 300;
  color: #000000;
`;
