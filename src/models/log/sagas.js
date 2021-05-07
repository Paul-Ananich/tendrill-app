import {takeEvery, call, put} from 'redux-saga/effects';

import {fetchLog} from '../../fetchers/log';
import {GET_LOG} from '../../components/organisms/Details/ducks/types';
import {setLog, setLogError} from './actions';

function* reactToGetLog() {
  try {
    const {data} = yield call(fetchLog);
    yield put(setLog(data));
  } catch (err) {
    yield put(setLogError(err));
  }
}

function* watchGetLog() {
  yield takeEvery(GET_LOG, reactToGetLog);
}

export default [watchGetLog()];
