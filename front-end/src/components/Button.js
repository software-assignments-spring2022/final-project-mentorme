import React from "react";
import "../styles//Button.css";

const SIZES = ["btn--default", "btn--medium", "btn--small", "btn--long", "btn--medium--long"];

const STYLES = [
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
]
export const Button = ({ children, type, onClick, buttonStyle, buttonSize, width, height }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const userStyle = {
    width: width,
    height: height,
  };
  return (


    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} style={{ width: userStyle.width, height: userStyle.height }} onClick={onClick} type={type}>
      {children}
    </button>
  );
};


export default Button;
