import {createAction} from '@reduxjs/toolkit';
import {GET_FARM} from './types';
import {GET_LOGS} from './types';

const getFarm = createAction(GET_FARM);
const getLogs = createAction(GET_LOGS);

export {getFarm, getLogs};
