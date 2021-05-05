import {createAction} from '@reduxjs/toolkit';

import {GET_LOCATIONS_FULFILLED, GET_LOCATIONS_REJECTED} from './types';

const setLocationsList = createAction(GET_LOCATIONS_FULFILLED);
const setLocationsListError = createAction(GET_LOCATIONS_REJECTED);

export {setLocationsList, setLocationsListError};
