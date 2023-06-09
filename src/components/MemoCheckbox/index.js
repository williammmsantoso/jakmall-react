import React from "react";

const CustomCheckbox = ({ checkboxChange }) => (
    <input name="cssCheckbox" id="dropshipper" type="checkbox" className="css-checkbox" onChange={checkboxChange} />
);

const MemoCheckbox = React.memo(
    CustomCheckbox,
    (prev, next) => prev.key === next.key
);

export default MemoCheckbox;