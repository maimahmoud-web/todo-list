import { useState } from 'react';
import react from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import {v4 as uuidv4} from 'uuid';
import {TodoEdit} from './TodoEdit'




export const TodoAll =()=>{

    const [todos,setTodos]=useState([])

   const addTodo=todo=>{
        setTodos([...todos,{id:uuidv4(),task:todo ,completed:false,isEditing:false,isDeleting: false}])
    }
    
     const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteTodo = (id) => {
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, isDeleting: true } : todo
  ));

  setTimeout(() => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, 300); // match animation duration
};

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const createRipple = (e) => {
  const button = e.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${e.clientY - button.offsetTop - radius}px`;

  button.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 500);
};

    return(
        <div className='TodoAll'>
            <h1 > My ToDo
         <i className="bi bi-check2-all" style={{ fontSize: "28px", color: "#7AAACE" , marginLeft: "3px" , top: "-4px" }}></i>

            </h1>

            <TodoForm addTodo={addTodo}/>
             {/* display todos */}
           {todos.map((todo) =>
        todo.isEditing ? (
          <TodoEdit key={todo.id} editTodo={editTask} task={todo} />
        ) : (
<Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} createRipple={createRipple} /> ))}
        </div>
    );
};