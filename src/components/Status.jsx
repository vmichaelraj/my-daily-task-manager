import TaskBox from "./TaskName";
import React from "react";
function Status({ heading, tasks, setTasks }) {
  return (
    <div className="task-container">
      <h2>{heading}</h2>
      <div>
        {tasks.map((task, index) => (
          <TaskBox task={task} setTasks={setTasks} key={index} />
        ))}
      </div>
    </div>
  );
}
export default Status;
