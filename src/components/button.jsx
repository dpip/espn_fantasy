import React from "react";
import "../assets/styles/button.scss";
const Button = (props) => (
  <button className={"btn"} onClick={props.action} disabled={props.disabled}>
    {props.text}
    {props.icon}
    {props.children}
  </button>
);
export default Button;
