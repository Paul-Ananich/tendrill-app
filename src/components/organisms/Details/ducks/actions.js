import {createAction} from '@reduxjs/toolkit';
import {GET_LOG, GET_FARM, CREATE_LOG} from './types';

const getFarm = createAction(GET_FARM);
const getLog = createAction(GET_LOG);
const createLog = createAction(CREATE_LOG);

export {getFarm, getLog, createLog};
