// import { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newtask, setNewtask] = useState();

  const gettext = (event) => {
    setNewtask(event.target.value);
  };
  const addTodolist = () => {
    setTodoList([...todoList, newtask]);
  };
  return (
    <div className="App" style={{ backgroundColor: "gray", padding: "80px" }}>
      <input type="text" onChange={gettext} />
      <button onClick={addTodolist}>Add Task</button>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div className="tasklist">
              <h1>{task}</h1>
              <button>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
