
getNextId=0


export const addTodo = text => {
    return {
        type:'ADD_TODO',
        text:text,
        keyId:getNextId++
    }
}
