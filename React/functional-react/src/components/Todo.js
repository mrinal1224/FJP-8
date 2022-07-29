import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  let addItem = (task) => {
    setTaskArray([...taskArray, task]);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setTask(e.target.value)} />

      <button onClick={() => addItem(task)}>Add Task</button>

      <ul>
        {taskArray.map((task) => {
          return <li>{task}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
