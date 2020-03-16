import React from 'react'
import './textarea.css'





const Textarea =({input, meta, ...props})=>{
    
    return(
        <div>
           
            <textarea  cols="30" rows="3" 
            placeholder="create task"
            {...props}  {...input}/>
            <div className='error'>
            {meta.error&&meta.touched&&meta.error}
            </div>
        </div>
    )
}


export default Textarea