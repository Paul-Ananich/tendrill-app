import {createSelector} from 'reselect';
import _ from 'lodash';

const acceptedKeys = [
  'lifecycle',
  'age',
  'health_status',
  'Areas',
];

const logSelector = state => state.log;

const getFilteredFields = createSelector(logSelector, ({log}) =>
  _.pickBy(log.fields, (_value, key) => acceptedKeys.includes(key)),
);

export {getFilteredFields};