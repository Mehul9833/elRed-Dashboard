import React from "react";

const InputField = (props) => {
  return (
    <div className="form-input-box">
      {props.label !== undefined && (
        <>
          <label for={props.id}>{props.label}</label> <br />
        </>
      )}

      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputField;
