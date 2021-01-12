
import React from 'react';
import DeleteIcon from '@material-ui/icons/Cancel'; 
import Tooltip from '@material-ui/core/Tooltip';
import './index.css'

export default function ToDoList(props) {
    return (
        <>
            <div className="todo_style">
            <Tooltip title="Remove Task"><span onClick={()=>{props.onSelect(props.id)}}><DeleteIcon className="deleteIcon" /></span></Tooltip>
                    <li>{props.text}</li>
                    
                
            </div>
        </>
    )
}