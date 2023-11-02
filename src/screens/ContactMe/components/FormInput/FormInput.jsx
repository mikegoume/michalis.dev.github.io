import React from "react";

function FormInput(props) {
  const { label } = props;

  return (
    <div>
      <label>
        <p>{label}</p>
        <input type="text" name={`${label}`} />
      </label>
    </div>
  );
}

export default FormInput;
