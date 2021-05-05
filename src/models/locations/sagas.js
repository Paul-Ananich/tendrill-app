import {takeEvery, call, put} from 'redux-saga/effects';

import {fetchLocationsList} from '../../fetchers/locations';
import {GET_LOCATIONS} from '../../components/organisms/Home/ducks/types';
import {setLocationsList, setLocationsListError} from './actions';

function* reactToGetLocations() {
  try {
    const {data} = yield call(fetchLocationsList);
    yield put(setLocationsList(data));
  } catch (err) {
    yield put(setLocationsListError(err));
  }
}

function* watchGetLocations() {
  yield takeEvery(GET_LOCATIONS, reactToGetLocations);
}

export default [watchGetLocations()];
