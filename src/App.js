
import './App.css';
import { useState } from "react";


const flag=false;

function Taskbtn({ openPopup }) {
  return (
    <div className='task-container'>
      <button className='task-btn' onClick={openPopup}>
        Add task
      </button>
    </div>
  );
}

function Todo({ tasks }) {
  return (
    <div className='Todo'>
      {tasks.map((t, index) => (
        <Task key={index} task={t.text} date={t.date} />
      ))}
    </div>
  );
}

function Task({task ,date}) {
  return (
    <div className="task-item">
      
      <div className="left">
        <input type="checkbox" />

        <div>
          <p className="task-title">
            {task}
          </p>
          <span className="task-date">
            {date}
          </span>
        </div>
      </div>

      <div className="right">
        <button>🗑️</button>
        <button>✏️</button>
      </div>

    </div>
  );
}

function TaskPanel({ addTask, closeForm }) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  return (
    <div className="modal" onClick={closeForm}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <h1>Enter your task</h1>

        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />

        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />

        <div className="buttons">
          <button
            onClick={() => {
              if (taskName.trim() === "") return;

              addTask({
                text: taskName,
                date: taskDate,
              });

              closeForm();
            }}
          >
            Save
          </button>

          <button onClick={closeForm}>Cancel</button>
        </div>

      </div>
    </div>
  );
}



function App() {

const [tasks, setTasks] = useState([]);
const [input, setInput] = useState("");
const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className='Todo-Write'>
        <h1>TODO LIST</h1>
      </div>

      

      <div className="task-section">
        <Taskbtn openPopup={() => setShowPopup(true)} />

        <Todo tasks={tasks} />
        {showPopup && (
      <TaskPanel
    addTask={(newTask) => setTasks([...tasks, newTask])}
    closeForm={() => setShowPopup(false)}
  />
)}
      </div>
    </>
  );
}

export default App;