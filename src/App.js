import "./App.css";
import Button from "../src/components/Button";
import TextoInput from "../src/components/TextoInput";
import ButtonClear from "../src/components/ButtonClear";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val);
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <TextoInput input={input} />
        <div className="row">
          <Button manejarclick={addInput}>1</Button>
          <Button manejarclick={addInput}>2</Button>
          <Button manejarclick={addInput}>3</Button>
          <Button manejarclick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button manejarclick={addInput}>4</Button>
          <Button manejarclick={addInput}>5</Button>
          <Button manejarclick={addInput}>6</Button>
          <Button manejarclick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button manejarclick={addInput}>7</Button>
          <Button manejarclick={addInput}>8</Button>
          <Button manejarclick={addInput}>9</Button>
          <Button manejarclick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button manejarclick={addInput}>=</Button>
          <Button manejarclick={addInput}>0</Button>
          <Button manejarclick={addInput}>.</Button>
          <Button manejarclick={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
