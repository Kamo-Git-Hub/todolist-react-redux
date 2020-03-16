import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todo-reducer";
import { reducer as formReducer } from 'redux-form';



let reducers = combineReducers({
    todo:todoReducer,
    form:formReducer
})


export const store = createStore(reducers)