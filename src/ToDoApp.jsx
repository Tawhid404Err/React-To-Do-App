import { useState } from "react";

function ToDoApp() {
  const [tasks, setTasks] = useState([
    "Go to wash room",
    "Clean Your Bead",
    "Rest for 10 Min",
  ]);

  return (
    <>
      <div className="container">
        <h1 className="heading">Add Task To Do</h1>
        <span className="inputContainer">
          <input type="text" className="acceptInput" />
          <button className="addTaskButton">Add Task</button>
        </span>
        <ol className="orderList">
          {tasks.map((task, index) => (
            <li className="listItems" key={index}>
              <label>
                <input type="checkbox" className="circle-checkbox" />
                <div className="custom-checkbox"></div>
                <span className="taskText">{task}</span>
              </label>
              <button className="Up_Down_btn">{"<"}</button>
              <button className="Up_Down_btn">{">"}</button>
              <button className="deleteBtn">x</button>
            </li>
          ))}
          <li className="listItems">
            <label>
              <input type="checkbox" className="circle-checkbox" />
              <div className="custom-checkbox"></div>
              <span className="taskText">Go to Prayer</span>
            </label>
            <button className="Up_Down_btn">{"<"}</button>
            <button className="Up_Down_btn">{">"}</button>
            <button className="deleteBtn">x</button>
          </li>
        </ol>
      </div>
    </>
  );
}

export default ToDoApp;
