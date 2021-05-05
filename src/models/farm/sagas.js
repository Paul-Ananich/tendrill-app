import {takeEvery, call, put} from 'redux-saga/effects';

import {fetchFarm} from '../../fetchers/locations';
import {GET_FARM} from '../../components/organisms/Details/ducks/types';
import {setFarm, setFarmError} from './actions';

function* reactToGetFarm({payload: id}) {
  try {
    const {data} = yield call(fetchFarm, id);
    yield put(setFarm(data));
  } catch (err) {
    yield put(setFarmError(err));
  }
}

function* watchGetFarm() {
  yield takeEvery(GET_FARM, reactToGetFarm);
}

export default [watchGetFarm()];
