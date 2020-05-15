const initialState = {
  areas: [],
  draftPolygon: [],
  mousePosition: { lat: 0, lng: 0 },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FINISH_AREA':
      return {
        ...state,
        areas: [
          ...state.areas,
          state.draftPolygon,
        ],
        draftPolygon: [],
      };

    case 'DELETE_AREA':
      const newAreas = state.areas;
      newAreas.splice(action.value, 1);

      return {
        ...state,
        areas: newAreas,
      };

    case 'ADD_POLYGON_POINT':
      return {
        ...state,
        draftPolygon: [
          ...state.draftPolygon,
          action.value,
        ],
      };

    case 'UPDATE_MOUSE_POSITION':
      return {
        ...state,
        mousePosition: action.value,
      };

    default:
      return state;
  }
};
