
const initialState ={
    name:"ToDo List",
    list:[
        {id:0, title:"delete me end create yor task", done:false},
    
        
    ]
}

let count =0

const DONE = "DONE"
const ADD_TASK ="ADD_TASK"
const DELETE ="DELETE"



export  const todoReducer =(state=initialState, action)=>{
    switch(action.type){
        case DONE:
        return{
            ...state,
            list:state.list.map(l=>{
                if(l.id===action.listId){
                    return{
                        ...l, done:true
                    }
                }
                return l
            })
        }
        case ADD_TASK:{
            const pushed ={title: action.addTask, done:false, id:++count}
            return{
                ...state,
                list:[...state.list, pushed]
            }
        }
        case DELETE:
            return{
                ...state,
                list:state.list.filter(title=>title.id!==action.taskId)

            }

        default:
            return state
    }
}


export const todoDoneAC =(listId)=>({type:DONE, listId})
export const addTaskAC =(addTask)=>({type:ADD_TASK, addTask})
export const deleteTaskAC =(taskId)=>({type:DELETE, taskId})
