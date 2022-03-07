import { createReducer } from './utils';

const initialState = {
  isSignUpLoading: false,
  isLogInLoading: false,
  isGetUserLoading: false,
  isForgotPasswordLoading: false,
  isResetPasswordLoading: false,
};

const resetLoading = () => initialState;

const setLoading = (loadingState, { payload }) => ({
  ...loadingState,
  ...payload,
});

const loadingReducer = createReducer(initialState, {
  RESET_LOADING: resetLoading,
  SET_LOADING: setLoading,
});

export default loadingReducer;
