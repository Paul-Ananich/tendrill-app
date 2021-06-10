import {createReducer} from '@reduxjs/toolkit';

import {CHANGE_INPUT_STATE} from './types';

const initialState = {};

const detailsInputsReducer = createReducer(initialState, {
  [CHANGE_INPUT_STATE]: (state, {payload}) => ({
    ...state,
    [payload.inputName]: payload.value,
  }),
});

export default detailsInputsReducer;