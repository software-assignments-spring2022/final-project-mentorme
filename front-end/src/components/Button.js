import React from "react";
import "../styles/Button.css";
// import button from 'react-bootstrap/Button'

{/* 
    props that Button component takes:
        - childdren: displayed button named;
        - type: type;
        - onClick: on click action;
        - buttonStyle: style of button (color, fill);
        - buttonSize: size of button (see Button.css);
        - width: custom width of button;
        - height: custom height of button;
*/}

const SIZES = ["btn--default", "btn--medium", "btn--small", "btn--long", "btn--medium--long", "btn--account"];

const STYLES = [
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger-- solid",
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
<<<<<<< HEAD
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} style={userStyle} onClick={onClick} type={type}>
=======


    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} style={{ userStyle }} onClick={onClick} type={type}>
>>>>>>> bc8af2e4f80f7e5e4c45f60adf7050d9abb10252
      {children}
    </button>
  );
};

export default Button;
