import React from "react";

const Button = (props) => {
  return (
    <button
      className={`button ${
        props.className !== undefined ? props.className : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
