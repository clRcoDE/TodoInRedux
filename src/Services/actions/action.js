

import {ADD_TODO,TOGGLE_TODO} from '../type'

getNextId=0


export const addTodo = input => {
    return {
        type: ADD_TODO ,
        text:input,
        isCompleted:false,
        keyId:getNextId++
    }
}



