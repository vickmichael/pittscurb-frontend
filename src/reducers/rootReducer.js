import { combineReducers } from 'redux';

import { parkingAreasReducer } from './parkingAreasReducer';
import {  createZoneReducer } from './createZoneReducer';

const rootReducer = combineReducers({
  parkingAreas: parkingAreasReducer,
  createZone: createZoneReducer
});

export default rootReducer;