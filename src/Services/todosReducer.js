import {
    ADD_TODO,
    TOGGLE_TODO
} from './Types'


initialState = []

const  todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO :
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
        default:
            return state
    }
}


export default todosReducer



