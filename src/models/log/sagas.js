import {takeEvery, call, put} from 'redux-saga/effects';

import {fetchLogs} from '../../fetchers/logs';
import {GET_LOGS} from '../../components/organisms/Details/ducks/types';
import {setLogs, setLogsError} from './actions';

function* reactToGetLogs() {
  try {
    const {data} = yield call(fetchLogs);
    yield put(setLogs(data));
  } catch (err) {
    yield put(setLogsError(err));
  }
}

function* watchGetLogs() {
  yield takeEvery(GET_LOGS, reactToGetLogs);
}

export default [watchGetLogs()];
