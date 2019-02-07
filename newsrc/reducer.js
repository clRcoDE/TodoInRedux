

const initialState = {items:[]}



const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {...state,
          items:[
            ...state.items,
            {
            text: action.text,
            keyId:action.keyId,
            isCompleted:action.isCompleted
            }
          ]
        }
        
      
      default:
        return state
    }
  }
  
  export default reducer