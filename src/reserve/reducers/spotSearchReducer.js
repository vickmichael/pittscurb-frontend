const initialState = {
  destination: [], // could store multiple destinations if we want to track history
  time: [],
};
  
export const spotSearchReducer = ( state = initialState, action ) => {  
  switch (action.type) {
    case 'UPDATE_PLACE':
      return {
          ...state,
          destination : action.value
      };
        
      case 'UPDATE_TIME':
        return {
        ...state,
          time : action.value
        }
      default:
        return state;
  }
};
