import { combineReducers } from 'redux';
import apod from './apod';
import { penderReducer as pender } from 'redux-pender';

// 루트 리듀서
export default combineReducers({
  apod,
  pender
});
