import styled from "styled-components";

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const CheckboxWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;

    border-color: ${props => props.checked ? "#1BD97B" : "#CCCCCC"};
`;

export const CheckMark = styled.img`
    width: 15px;
    -webkit-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`;

export const CheckboxLabel = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #2D2A40;
    -webkit-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`;