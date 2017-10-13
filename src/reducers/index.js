import { combineReducers } from 'redux';
import collection from './collection';
import settings from './settings';

const mirador = combineReducers({
  collection,
  settings
});

export default mirador;
