import {takeEvery, call, put} from 'redux-saga/effects';

import {fetchLog, postLog} from '../../fetchers/log';
import {
  GET_LOG,
  CREATE_LOG,
} from '../../components/organisms/Details/ducks/types';
import {setLog, setLogError} from './actions';

function* reactToGetLog({payload: id}) {
  try {
    const {data} = yield call(fetchLog, id);
    yield put(setLog(data));
  } catch (err) {
    yield put(setLogError(err));
  }
}

function* reactToCreateLog({payload: fieldsData}) {
  try {
    const {data} = yield call(postLog, {
      fields: {
        Areas: [fieldsData.areaId],
        temperature: fieldsData.temperature,
        co2: fieldsData.co2,
        humidity: fieldsData.humidity,
      },
    });
    yield put(setLog(data));
  } catch (err) {
    yield put(setLogError(err));
  }
}

function* watchGetLog() {
  yield takeEvery(GET_LOG, reactToGetLog);
}

function* watchCreateLog() {
  yield takeEvery(CREATE_LOG, reactToCreateLog);
}

export default [watchGetLog(), watchCreateLog()];