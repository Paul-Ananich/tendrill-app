import {createReducer} from '@reduxjs/toolkit';

import {GET_LOG_FULFILLED, GET_LOG_REJECTED} from './types';

const initialState = {
  log: [],
  errors: [],
};

const logReducer = createReducer(initialState, {
  [GET_LOG_FULFILLED]: (state, {payload}) => ({
    ...state,
    log: payload,
    errors: [],
  }),
  [GET_LOG_REJECTED]: (state, {payload}) => ({
    ...state,
    errors: [...state.errors, payload],
  }),
});

export default logReducer;
