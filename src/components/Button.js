import React from "react";
import "../stylesheets/Button.css";

function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={`button ${isOperator(props.children) ? "operator" : "num"}`}
      onClick={() => props.manejarclick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
