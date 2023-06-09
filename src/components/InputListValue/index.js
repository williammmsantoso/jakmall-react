import React from "react";
import { Item, List, Title, Value } from "./styles";

const InputListValue = ({ data }) => {
    return <List>
        {
            data.map((item, idx) => {
                return <Item active={item.isActive} onClick={item.onClick} key={idx}>
                    <Title>{item.title}</Title>
                    {item.value && <Value>{item.value}</Value>}
                </Item>
            })
        }
      </List>
}

export default InputListValue;