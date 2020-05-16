import { combineReducers } from 'redux';
import spotSearchReducer from './spotSearchReducer';

const rootReducer = combineReducers({
  spotSearch: spotSearchReducer,
});

export default rootReducer;
