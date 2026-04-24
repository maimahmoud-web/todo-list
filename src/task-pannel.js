import { useState } from "react";
import "./task-pannel.css";

function TaskPanel({ props }) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  return (
    <div className="modal">
      <div className="modal-content">

        <h2>{props.taskName}</h2>
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />

        <h3>{props.taskDate}</h3>
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />

        
          
        </div>

      </div>
    
  );
}

export default TaskPanel;