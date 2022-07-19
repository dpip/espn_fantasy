import React from "react";

import "../assets/styles/chip.scss";

const Chip = (props) => {
  return (
    <div className={`chip ${props.type}`}>
      {props.image}
      <div className={"chip__content"}>
        <span className={"chip__content-text"}>{props.text}</span>
        <span className={"chip__content-subtext"}>{props.subtext}</span>
      </div>
      {props.btn}
    </div>
  );
};

export default Chip;
