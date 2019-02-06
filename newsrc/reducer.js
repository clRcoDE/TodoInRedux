const reducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            text: action.text,
            keyId:action.keyId
          }
        ]
      
      default:
        return state
    }
  }
  
  export default reducer