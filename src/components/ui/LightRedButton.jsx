import React from "react";

const LightRedButton = (props) => {
  return (
    <button className="light-red-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default LightRedButton;
