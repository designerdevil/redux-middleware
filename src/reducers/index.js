import { combineReducers } from 'redux';
import test from './testReducer';
import message from './messageReducer';

const rootReducer = combineReducers({
  test,
  message
});

export default rootReducer;
