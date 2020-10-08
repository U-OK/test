import React from "react";

import "./selector.css";

const Selector = ({ label, value, setValue, data }) => {
  return (
    <div className="form__input">
      {label && <label htmlFor={label}>{label}</label>}
      <select
        name={label}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        {data.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
