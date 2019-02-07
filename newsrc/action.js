
getNextId=0


export const addTodo = input => {
    return {
        type:'ADD_TODO',
        text:input,
        isCompleted:false,
        keyId:getNextId++
    }
}
