import { combineReducers } from 'redux';

import { parkingAreasReducer } from './parkingAreasReducer';

const rootReducer = combineReducers({
  parkingAreas: parkingAreasReducer,
});

export default rootReducer;