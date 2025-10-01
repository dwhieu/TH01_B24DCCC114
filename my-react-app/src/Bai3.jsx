import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Danh sách công việc</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
        style={{ padding: "5px" }}
      />
      <button onClick={addTask} style={{ marginLeft: "5px" }}>
        Thêm
      </button>

      <ul style={{ marginTop: "15px" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {t}{" "}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
