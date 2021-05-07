import {all} from 'redux-saga/effects';

import {sagas as locationsSaga} from '../models/locations';
import {sagas as farmSaga} from '../models/farm';
import {sagas as logsSaga} from '../models/log';

export default function* rootSaga() {
  yield all([...locationsSaga, ...farmSaga, ...logsSaga]);
}
