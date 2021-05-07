import {createAction} from '@reduxjs/toolkit';

import {GET_LOG_FULFILLED, GET_LOG_REJECTED} from './types';

const setLog = createAction(GET_LOG_FULFILLED);
const setLogError = createAction(GET_LOG_REJECTED);

export {setLog, setLogError};
