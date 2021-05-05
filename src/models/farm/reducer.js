import {createReducer} from '@reduxjs/toolkit';

import {GET_FARM_FULFILLED, GET_FARM_REJECTED} from './types';

const initialState = {
  farm: null,
  errors: [],
};

const locationsReducer = createReducer(initialState, {
  [GET_FARM_FULFILLED]: (state, {payload}) => ({
    ...state,
    farm: payload,
    errors: [],
  }),
  [GET_FARM_REJECTED]: (state, {payload}) => ({
    ...state,
    errors: [...state.errors, payload],
  }),
});

export default locationsReducer;
