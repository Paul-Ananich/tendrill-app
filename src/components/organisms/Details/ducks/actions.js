import {createAction} from '@reduxjs/toolkit';
import {GET_FARM} from './types';

const getFarm = createAction(GET_FARM);

export {getFarm};
