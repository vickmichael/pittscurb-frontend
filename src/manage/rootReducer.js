const initialState = {
  areas: [],
  draftPolygon: [],
  mousePosition: { lat: 0, lng: 0 },
  boundaries: [],
  regions: [],
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

    case 'TOGGLE_BOUNDARIES':
      const newBoundaries = state.boundaries.filter((boundary) => boundary !== action.value);
      if (newBoundaries.length === state.boundaries.length) {
        return { ...state, boundaries: [...state.boundaries, action.value] };
      }
      return {
        ...state,
        boundaries: newBoundaries,
      };

    case 'CREATE_REGION':
      return {
        ...state,
        regions: [...state.regions, action.value],
      };
    default:
      return state;
  }
};
