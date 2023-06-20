import React from "react";

//styles
import "./Button.scss";

const buttonSizeClassName = {
  sm: "button-size-sm",
  md: "button-size-md",
  lg: "button-size-lg",
};

const Button = ({ title, onClick, size = "sm" }) => {
  return (
    <button className={`button ${buttonSizeClassName[size]}`} onClick={onClick}>
      <span className="button-title">{title}</span>
    </button>
  );
};

export default Button;
