import { useState } from "react";
import "./App.css";

function App() {
  const changeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
    // const Names = <h2>{event.target.value} </h2>;
  };

  const [name, setName] = useState("");
  return (
    <div className="App">
      <h1> Hellow </h1>{" "}
      <div>{name && name ? <h1>Hi! {name}</h1> : <p>Enter Name</p>}</div>
      <br />
      <input type="text" placeholder="Enter Text" onChange={changeName} />
    </div>
  );
}

export default App;
