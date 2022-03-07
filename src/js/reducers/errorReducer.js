import { createReducer } from './utils';

const clearErrors = () => ({});

const receiveError = (errorState, { payload }) => payload;

const errorReducer = createReducer({}, {
  CLEAR_ERRORS: clearErrors,
  RECEIVE_ERROR: receiveError,
});

export default errorReducer;
