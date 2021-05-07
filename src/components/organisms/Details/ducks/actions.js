import {createAction} from '@reduxjs/toolkit';
import {GET_FARM} from './types';
import {GET_LOG} from './types';

const getFarm = createAction(GET_FARM);
const getLog = createAction(GET_LOG);

export {getFarm, getLog};
