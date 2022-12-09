import React from "react";
import "../stylesheets/ButtonClear.css";

function ButtonClear(props) {
  return <div className="miButtonClear">{props.children}</div>;
}

export default ButtonClear;
