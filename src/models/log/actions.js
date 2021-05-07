import {createAction} from '@reduxjs/toolkit';

import {GET_LOGS_FULFILLED, GET_LOGS_REJECTED} from './types';

const setLogs = createAction(GET_LOGS_FULFILLED);
const setLogsError = createAction(GET_LOGS_REJECTED);

export {setLogs, setLogsError};
