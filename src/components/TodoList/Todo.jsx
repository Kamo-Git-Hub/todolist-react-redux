import React from 'react'
import './todo.css'


const Todo =(props)=>{
    
    
    return(
        <div>
           
            <span className="task">
            

            {!props.done?<div>
                {props.title}
            </div>:<span className="finish">{props.title}</span>}
            

            <div>

            {props.done===false?
            <span className="button" onClick={()=>props.todoDoneAC(props.id)}>&#10004;</span>: 
            <span className="button" onClick={()=>props.deleteTaskAC(props.id)}>&times;</span>}
            </div>
            </span>
        </div>
    )
}


export default Todo