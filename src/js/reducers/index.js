import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  errors: errorReducer,
  loading: loadingReducer,
  user: userReducer,
});

export default rootReducer;
