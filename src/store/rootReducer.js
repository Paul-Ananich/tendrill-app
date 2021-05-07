import {combineReducers} from 'redux';

import {reducer as locationsReducer} from '../models/locations';
import {reducer as farmReducer} from '../models/farm';
import {reducer as logsReducer} from '../models/log';

const rootReducer = combineReducers({
  locations: locationsReducer,
  farm: farmReducer,
  logs: logsReducer,
});

export default rootReducer;
