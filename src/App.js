
import './App.css';
import { useState } from "react";


function Taskbtn({ tasks, setTasks, input, setInput }) {
  return (
    <div className='task-container'>
      <button 
        className='task-btn'
        onClick={() => {
          if (input.trim() === "") return; // prevent empty task
          setTasks([...tasks, input]);
          setInput("");
        }}
      >
        Add task
      </button>
    </div>
  );
}

function Todo(){
  return(
    <>
    <div className='Todo'>
      <Task task="me"
      date="5:23 AM, 01/06/2022" />
    </div>
    
    </>
  )
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

function App() {

const [tasks, setTasks] = useState([]);
const [input, setInput] = useState("");

  return (
    <>
      <div className='Todo-Write'>
        <h1>TODO LIST</h1>
      </div>

      <input 
      onChange={(e) => setInput(e.target.value)}
      placeholder='enter your task'
      />

<div className="task-section">
     <Taskbtn 
  tasks={tasks} 
  setTasks={setTasks} 
  input={input} 
  setInput={setInput}
/>
      <Todo />
</div>
    </>
  );
}

export default App;