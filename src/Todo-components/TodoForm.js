import react, { useState } from 'react';
import { Todo } from './Todo';
import { TodoAll } from './TodoAll';

export const TodoForm =({addTodo,task,createRipple,deleteTodo})=>{

    const [value,setValue]=useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    }

    return(
        
        <form className='TodoForm'  onSubmit={handleSubmit}> 
        <input type="text" className='todo-input' value={value}
        placeholder='What is the task for the day ?' 
        onChange={(e)=>setValue(e.target.value)}
        />
        <button 
            type="submit" className='todo-btn'>Add Task</button>
        </form>

        
    )
}