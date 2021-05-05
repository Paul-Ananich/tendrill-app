import {createAction} from '@reduxjs/toolkit';

import {GET_FARM_FULFILLED, GET_FARM_REJECTED} from './types';

const setFarm = createAction(GET_FARM_FULFILLED);
const setFarmError = createAction(GET_FARM_REJECTED);

export {setFarm, setFarmError};
