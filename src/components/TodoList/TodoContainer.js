import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import {todoDoneAC, addTaskAC, deleteTaskAC} from '../../redux/todo-reducer'
import Task from './Task'

class TodoContainer extends React.Component{
    render(){
        
        const addTask =(value)=>{
            
            this.props.addTaskAC(value.addTask)
        }
        return(
            <div>
                <center>
                <h1>
            {this.props.name}
            </h1>
                </center>
                <Task onSubmit={addTask}/>
                {this.props.list.map((todo)=><Todo
                 name={this.props.name} id={todo.id}
                  title={todo.title} todoDoneAC={this.props.todoDoneAC}
                  done={todo.done}
                  deleteTaskAC={this.props.deleteTaskAC}
                  />)}
            </div>
        )
    }
}


const mapStateToProps =(state)=>{
    return{
        list:state.todo.list,
        name:state.todo.name,
        id:state.todo.id
        
    }
}

export default connect(mapStateToProps,{
todoDoneAC, addTaskAC, deleteTaskAC
})(TodoContainer)