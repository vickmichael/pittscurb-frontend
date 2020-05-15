const initialState = {
  boundaries: [],
  zones: [],
};

export const createZoneReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'TOGGLE_BOUNDARIES':
      const newBoundaries = state.boundaries.filter(boundary =>
        boundary !== action.value)
      if (newBoundaries.length === state.boundaries.length){
        return {...state, boundaries: [...state.boundaries, action.value]}
      } 
      return {
        ...state,
        boundaries: newBoundaries
      }
    case 'CREATE_ZONE':
      return {
        ...state,
        zones: [...state.zones, action.value]
      };
    default:
      return state
  }
};