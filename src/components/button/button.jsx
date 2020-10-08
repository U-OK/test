import React from "react";
import classnames from "classnames";

import "./button.css";

const Button = ({ children, block, primary, secondary, onClick, submit }) => {
  const classes = classnames("btn", {
    "btn-block": block,
    "btn-primary": primary,
    "btn-secondary": secondary,
  });

  return (
    <button
      className={classes}
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      {children ? children : "Кнопка"}
    </button>
  );
};

export default Button;
