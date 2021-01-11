
import React from 'react';
import DeleteIcon from '@material-ui/icons/Cancel'; 
import './index.css'

export default function ToDoList(props) {
    return (
        <>
            <div className="todo_style">
                <span onClick={()=>{props.onSelect(props.id)}}><DeleteIcon className="deleteIcon" /></span>
                    <li>{props.text}</li>
                    
                
            </div>
        </>
    )
}