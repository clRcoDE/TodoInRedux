import {
  ADD_TODO,
  TOGGLE_TODO
} from '../type'

const initialState = {
  items: []
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            text: action.text,
            keyId: action.keyId,
            isCompleted: action.isCompleted
          }
        ]
      }
    case TOGGLE_TODO:
      return state.items.map(todoItem => {
        (todoItem.KeyId === action.KeyId)
        ? {...todoItem, completed: !todoItem.completed}
        : todoItem
      })




    default:
      return state
  }
}

export default reducer