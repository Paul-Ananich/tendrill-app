
import {put, select, debounce} from 'redux-saga/effects';
import _ from 'lodash';

import {CHANGE_INPUT_STATE} from './types';
import {updateLog} from './';
import {getFilteredFields} from './selectors';

function* reactToChangeSlider({payload}) {
  const filteredFields = yield select(getFilteredFields);
  yield put(
    updateLog({
      fields: {
        ...filteredFields,
        [payload.inputName]: payload.value,
      },
    }),
  );
}

function* watchSliderChanges() {
  yield debounce(1000, CHANGE_INPUT_STATE, reactToChangeSlider);
}

export default [watchSliderChanges()];