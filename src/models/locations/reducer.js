import {createReducer} from '@reduxjs/toolkit';

import {GET_LOCATIONS_FULFILLED, GET_LOCATIONS_REJECTED} from './types';

const initialState = {
  locationsList: [],
  errors: [],
};

const locationsReducer = createReducer(initialState, {
  [GET_LOCATIONS_FULFILLED]: (state, {payload}) => ({
    ...state,
    locationsList: payload,
    errors: [],
  }),
  [GET_LOCATIONS_REJECTED]: (state, {payload}) => ({
    ...state,
    errors: [...state.errors, payload],
  }),
});

export default locationsReducer;
