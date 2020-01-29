import { combineReducers } from 'redux';
import tasks from './task';
import formVisibility from './visibility';

export default combineReducers({
  tasks,
  formVisibility
});