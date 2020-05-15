import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  areas: [],
  draftPolygon: [],
  mousePosition: {lat: 0, lng: 0},
  boundaries: [],
  zones: [],
};

const rootReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'FINISH_AREA':
      return {...state, areas: [...state.areas, state.draftPolygon], draftPolygon: []}
    case 'DELETE_AREA':
      const newAreas = state.areas;
      newAreas.splice(action.value, 1);
      console.log(newAreas)
      return {...state, areas: newAreas}
    case 'ADD_POLYGON_POINT':
      return {...state, draftPolygon: [...state.draftPolygon, action.value]}
    case 'UPDATE_MOUSE_POSITION':
      return {...state, mousePosition: action.value}
    case 'TOGGLE_BOUNDARIES':
      const newBoundaries = state.boundaries.filter(boundary =>
        boundary !== action.value)
      if (newBoundaries.length === state.boundaries.length){
        return {...state, boundaries: [...state.boundaries, action.value]}
      } 
      return {...state, boundaries: newBoundaries}
    case 'CREATE_ZONE':
      return {...state, zones: [...state.zones, action.value]}
    default:
      return state
  }
};
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// prevent right click menu from opening
window.oncontextmenu = () => {
  return false;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
