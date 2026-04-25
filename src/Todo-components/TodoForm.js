import react, { useState } from 'react';

export const TodoForm =({addTodo})=>{

    const [value,setValue]=useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    }

    return(
        <form className='TodoForm'  onSubmit={handleSubmit}> Todo List
        <input type="text" className='todo-input' value={value}
        placeholder='What is the task for the day ?' 
        onChange={(e)=>setValue(e.target.value)}
        />
        <button type ="submit" className='todo-btn'>Add task</button>
</form>
        
    )
}