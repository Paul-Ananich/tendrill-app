import {createReducer} from '@reduxjs/toolkit';

import {GET_LOGS_FULFILLED, GET_LOGS_REJECTED} from './types';

const initialState = {
    logs: [],
    errors: [],
};

const logsReducer = createReducer(initialState, {
    [GET_LOGS_FULFILLED]: (state, {payload}) => ({
        ...state,
        logs: payload,
        errors: [],
    }),
    [GET_LOGS_REJECTED]: (state, {payload}) => ({
        ...state,
        errors: [...state.errors, payload],
    }),
});

export default logsReducer;
