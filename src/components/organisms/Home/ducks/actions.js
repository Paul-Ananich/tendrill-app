import {createAction} from '@reduxjs/toolkit';
import {GET_LOCATIONS} from './types';

const getLocationsList = createAction(GET_LOCATIONS);

export {getLocationsList};
