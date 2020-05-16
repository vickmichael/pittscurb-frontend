const initialState = {
  destination: [], // could store multiple destinations if we want to track history
  time: [],
};
  
const spotSearchReducer = ( state = initialState, action ) => {  
  switch (action.type) {
    case 'UPDATE_PLACE':
      return {
          ...state,
          destination : action.value
      };
        
      case 'UPDATE_TIME':
        console.log('Time updated: ' + action.value);
        return {
        ...state,
          time : action.value
        }
      default:
        return state;
  }
};
export default spotSearchReducer;

