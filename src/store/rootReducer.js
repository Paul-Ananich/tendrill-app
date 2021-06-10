import {combineReducers} from 'redux';

import {reducer as locationsReducer} from '../models/locations';
import {reducer as farmReducer} from '../models/farm';
import {reducer as logReducer} from '../models/log';
import {reducer as detailsInputsReducer} from '../components/organisms/Details/ducks';

const rootReducer = combineReducers({
  locations: locationsReducer,
  farm: farmReducer,
  log: logReducer,
  detailsInput: detailsInputsReducer,
});

export default rootReducer;
