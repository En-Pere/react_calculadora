import "./App.css";
import Button from "../src/components/Button";
import Texto from "../src/components/TextoInput";
import ButtonClear from "../src/components/ButtonClear";

function App() {
  return (
    <div className="App">
      <div className="calculator-container">
        <Texto />
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className="row">
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <ButtonClear>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
