import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "take a shower",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addNewTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    const filteredTask = tasks.filter((_, i) => i !== index);
    setTasks(filteredTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const filteredTask = [...tasks];
      [filteredTask[index], filteredTask[index - 1]] = [
        filteredTask[index - 1],
        filteredTask[index],
      ];
      setTasks(filteredTask);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const filteredTask = [...tasks];
      [filteredTask[index], filteredTask[index + 1]] = [
        filteredTask[index + 1],
        filteredTask[index],
      ];
      setTasks(filteredTask);
    }
  }

  return (
    <div className="container">
      <h1>To-Do-List</h1>
      <div className="input">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button className="green-btn" onClick={addNewTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index} className="list">
            <span>{task}</span>
            <button className="red-btn" onClick={() => removeTask(index)}>
              Delete
            </button>
            <button className="blue-btn" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="blue-btn" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
