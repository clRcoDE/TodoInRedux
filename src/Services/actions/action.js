

import {ADD_TODO,TOGGLE_TODO} from '../type'
// import {store} from '../../Pages/MainTodo'


getNextId=0

export const setItems = input => {
    return addTodoAction(input)
    // store.dispatch(
        
        
        // )
}
 const addTodoAction = input => {
    return  {
        type: ADD_TODO ,
        text:input,
        isCompleted:false,
        keyId:getNextId++
    }
}


export const setToggle = index =>{
        return ToggleTodoAction(index)

}


const ToggleTodoAction = index => {
    return{
        type: TOGGLE_TODO,
        keyId:index,
    
        
    }
}



