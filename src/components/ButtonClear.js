import React from "react";
import "../stylesheets/ButtonClear.css";

function ButtonClear(props) {
  return (
    <div className="miButtonClear" onClick={props.manejarClear}>
      {props.children}
    </div>
  );
}

export default ButtonClear;
