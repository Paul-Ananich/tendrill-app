import {all} from 'redux-saga/effects';

import {sagas as locationsSaga} from '../models/locations';
import {sagas as farmSaga} from '../models/farm';
import {sagas as logSaga} from '../models/log';
import {sagas as detailsInputsSaga} from '../components/organisms/Details/ducks';

export default function* rootSaga() {
  yield all([...locationsSaga, ...farmSaga, ...logSaga, ...detailsInputsSaga]);
}
