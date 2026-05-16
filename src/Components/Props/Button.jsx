import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={`buttonMaster ${props.className}`}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
    >
      {props.text}
    </button>
  );
};

export default Button;
