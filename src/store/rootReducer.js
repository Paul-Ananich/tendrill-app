import {combineReducers} from 'redux';

import {reducer as locationsReducer} from '../models/locations';
import {reducer as farmReducer} from '../models/farm';

const rootReducer = combineReducers({
  locations: locationsReducer,
  farm: farmReducer,
});

export default rootReducer;
