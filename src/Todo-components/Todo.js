import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo =({task,toggleComplete,deleteTodo,editTodo, createRipple})=>{
    return(
        <div className={`Todo fade-in ${task.isDeleting ? "deleting" : ""}`}>
            <p  className={`${task.completed ? "completed" : "incompleted"}`} onClick={()=> toggleComplete(task.id)}> {task.task}</p>
           <div>
            
             <div className="icon-btn ripple-btn" onClick={(e) => {
                    createRipple(e);
                    deleteTodo(task.id);
                    }}>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} />
            </div>

            <div className="icon-btn ripple-btn" onClick={(e) => {
            createRipple(e);
            editTodo(task.id);
            }}>
            <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
            </div>

           </div>
        </div>
        
             
    )
}