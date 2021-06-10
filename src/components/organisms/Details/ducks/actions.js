import {createAction} from '@reduxjs/toolkit';
import {GET_LOG, GET_FARM, CREATE_LOG, UPDATE_LOG, CHANGE_INPUT_STATE} from './types';

const getFarm = createAction(GET_FARM);
const getLog = createAction(GET_LOG);
const createLog = createAction(CREATE_LOG);
const updateLog = createAction(UPDATE_LOG);
const changeInputState = createAction(CHANGE_INPUT_STATE);

export {getFarm, getLog, createLog, updateLog, changeInputState};
