import react, { useState } from 'react';
import { Todo } from './Todo';

export const TodoEdit =({editTodo,task})=>{

    const [value,setValue]=useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value,task.id);

        setValue("");
    }

    return(
        <form className='TodoForm'  onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value}
        placeholder='What to edit ?' 
        onChange={(e)=>setValue(e.target.value)}
        />
        <button type ="submit" className='todo-btn'>Add task</button>
</form>
        
    )
}