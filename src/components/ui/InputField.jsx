import React from "react";

const InputField = React.forwardRef((props, ref) => (
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
      ref={ref}
    />
  </div>
));

export default InputField;
