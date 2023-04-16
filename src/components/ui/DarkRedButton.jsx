import React from "react";

const DarkRedButton = (props) => {
  return (
    <button className="dark-red-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default DarkRedButton;
