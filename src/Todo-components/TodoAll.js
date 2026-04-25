import { useState } from 'react';
import react from 'react';
import { TodoForm } from './TodoForm';
import {v4 as uuidv4} from 'uuid';
uuidv4();

export const TodoAll =()=>{

    const [todos,setTodos]=useState([])

   const addTodo=todo=>{
        setTodos([...todos,{id:uuidv4(),task:todo ,completed:false,isEditing:false}])
    }

    return(
        <div className='TodoAll'>
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}