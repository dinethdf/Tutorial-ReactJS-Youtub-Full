import { useState } from "react";
import "./App.css";

function App() {
  var [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h1> {number} </h1>
      <br />
      {/* <input type="text" placeholder="Enter Text" onChange={changeName} /> */}
      <button onClick={() => setNumber((number = number + 1))}>Add 1</button>
      <button onClick={() => setNumber((number = number - 1))}>Remove 1</button>
      <button onClick={() => setNumber(0)}>Set zero</button>
    </div>
  );
}

export default App;
