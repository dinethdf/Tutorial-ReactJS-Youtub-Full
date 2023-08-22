import { useState } from "react";
import "./App.css";

function App() {
  const changeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const hideShow = () => {
    showtest === true ? setShowtest(false) : setShowtest(true);
  };

  const [name, setName] = useState("");
  const [showtest, setShowtest] = useState(true);
  return (
    <div className="App">
      <h1> Hellow </h1>
      {showtest === true ? (
        <div>{name && name ? <h1>Hi! {name}</h1> : <p>Enter Name</p>}</div>
      ) : (
        "Welcome"
      )}
      <br />
      <input type="text" placeholder="Enter Text" onChange={changeName} />
      <button onClick={hideShow}>Click Me</button>
    </div>
  );
}

export default App;
