import {combineReducers} from 'redux';

import {reducer as locationsReducer} from '../models/locations';
import {reducer as farmReducer} from '../models/farm';
import {reducer as logReducer} from '../models/log';

const rootReducer = combineReducers({
  locations: locationsReducer,
  farm: farmReducer,
  log: logReducer,
});

export default rootReducer;
