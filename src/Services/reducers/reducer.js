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
      return {
        ...state,
        items : state.items.map(todoItem => todoItem.keyId === action.keyId ? { ...todoItem, isCompleted: !todoItem.isCompleted }   : { ...todoItem })
      }



    default:
      return state
  }
}

export default reducer