import React from "react";

import FormError from "./formError"

import "./input.css";

const Input = ({ label, error, type, value, setValue }) => {
  return (
    <div className="form__input">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        name={label}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {error && <FormError error={error} />}
    </div>
  );
};

export default Input;
