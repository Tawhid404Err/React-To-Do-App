import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function ToDoApp() {
  // Initialize tasks from cookies or empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = Cookies.get("todoTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");

  // Save tasks to cookies whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      Cookies.set("todoTasks", JSON.stringify(tasks), {
        expires: 30, // Store for 30 days
      });
    } else {
      // Remove cookie if no tasks
      Cookies.remove("todoTasks");
    }
  }, [tasks]);

  function handleChangeInput(e) {
    setNewTask(e.target.value);
  }

  function handleAddNewTask(e) {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleRemoveTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTask = [...tasks];

      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];

      setTasks(updateTask);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTask = [...tasks];

      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];

      setTasks(updateTask);
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="">Add Task To Do</h1>
        <span className="inputContainer">
          <input
            type="text"
            className="acceptInput"
            value={newTask}
            onChange={handleChangeInput}
          />
          <button className="addTaskButton" onClick={handleAddNewTask}>
            Add Task
          </button>
        </span>

        <ol className="orderList">
          {tasks.map((task, index) => (
            <li className="listItems" key={index}>
              <label>
                <input type="checkbox" className="circle-checkbox" />
                <div className="custom-checkbox"></div>
                <span className="taskText">{task}</span>
              </label>
              <button className="Up_Down_btn" onClick={() => moveTaskUp(index)}>
                {"<"}
              </button>
              <button
                className="Up_Down_btn"
                onClick={() => moveTaskDown(index)}
              >
                {">"}
              </button>
              <button
                className="deleteBtn"
                onClick={() => handleRemoveTask(index)}
              >
                x
              </button>
            </li>
          ))}

          {tasks.length === 0 && (
            <li className="listItems firstElement">
              <span className="taskText">
                Add a Task !<span>✨</span>
              </span>
            </li>
          )}
        </ol>
      </div>
    </>
  );
}

export default ToDoApp;
