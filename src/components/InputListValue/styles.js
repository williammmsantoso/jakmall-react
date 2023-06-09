import styled from "styled-components";

export const List = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 30px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Item = styled.div`
    flex-direction: column;
    display: flex;
    width: 180px;
    padding: 11px 15px;

    background: ${props => props.active ? "rgba(27, 217, 123, 0.1)" : "transparent"};
    border: ${props => props.active ? "2px solid #1bd97b" : "1px solid #cccccc"};

    &:hover {
        cursor: pointer;
    }
`;

export const Title = styled.p`
    font-size: 13px;
    font-weight: 500;
  
`;

export const Value = styled.p`
    font-size: 16px;
    font-weight: 700;
    
`;
