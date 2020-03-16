import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Textarea from '../utils/textarea/Textarea'
import { maxLengthCreater, requairedFild } from './../utils/validate/validate'
import './todo.css'


const maxLength = maxLengthCreater(120)
const Task =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <center>
            <div>
            <Field name="addTask" component={Textarea}  validate={[requairedFild, maxLength]}/>
            </div>
            <button className="addBtn">add new task</button>
            </center>
        </form>
    )
}

const ReduxFormHoc =reduxForm({form:"task"})(Task)

export default ReduxFormHoc