import { clearErrorsAction, receiveErrorAction } from 'js/actions/errorActions';
import { setLoadingAction } from 'js/actions/loadingActions';
import {
  logOutAction,
  receiveUserAction,
  clearUserAction,
} from 'js/actions/userActions';
import { formatUserPayload, getLoggedInHeaders, publicHeaders } from './utils';

const API_URL = process.env.REACT_APP_API_URL;

const signUp = async (action, { dispatch }) => {
  const { payload } = action;

  dispatch(setLoadingAction({ isSignUpLoading: true }));

  const response = await fetch(`${API_URL}/accounts/`, {
    method: 'POST',
    body: JSON.stringify(formatUserPayload(payload)),
    headers: publicHeaders,
  });

  const responseJson = await response.json();

  if (!response.ok) {
    dispatch(receiveErrorAction({ signUpError: responseJson }));
  } else {
    const { user, token } = responseJson;
    dispatch(clearErrorsAction());
    dispatch(receiveUserAction({ ...user, token }));
  }

  dispatch(setLoadingAction({ isSignUpLoading: false }));
};

const logIn = async (action, { dispatch }) => {
  const { payload } = action;

  dispatch(setLoadingAction({ isLogInLoading: true }));

  const response = await fetch(`${API_URL}/accounts/login/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: publicHeaders,
  });

  const responseJson = await response.json();

  if (!response.ok) {
    dispatch(receiveErrorAction({ logInError: responseJson }));
  } else {
    const { user, token } = responseJson;
    dispatch(clearErrorsAction());
    dispatch(receiveUserAction({ ...user, token }));
  }

  dispatch(setLoadingAction({ isLogInLoading: false }));
};

const logOut = (action, { dispatch }) => dispatch(clearUserAction());

const getUser = async (action, { dispatch, getState }) => {
  dispatch(setLoadingAction({ isGetUserLoading: true }));
  const { user: { token } } = getState();

  const response = await fetch(`${API_URL}/accounts/retrieve/`, {
    method: 'GET',
    headers: getLoggedInHeaders(token),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    dispatch(receiveErrorAction({ getUserError: responseJson }));
    dispatch(logOutAction());
  } else {
    const { user, token: newToken } = responseJson;
    dispatch(clearErrorsAction());
    dispatch(receiveUserAction({ ...user, token: newToken }));
  }

  dispatch(setLoadingAction({ isGetUserLoading: false }));
};

const forgotPassword = async (action, { dispatch }) => {
  const { payload } = action;

  dispatch(setLoadingAction({ isForgotPasswordLoading: true }));

  const response = await fetch(`${API_URL}/accounts/password/forgot/`, {
    method: 'POST',
    body: JSON.stringify(formatUserPayload(payload)),
    headers: publicHeaders,
  });

  if (!response.ok) {
    const responseJson = await response.json();
    dispatch(receiveErrorAction({ forgotPasswordError: responseJson }));
  } else {
    dispatch(clearErrorsAction());
  }

  dispatch(setLoadingAction({ isForgotPasswordLoading: false }));
};

const resetPassword = async (action, { dispatch }) => {
  const { payload: { token: verificationToken, ...restOfPayload } } = action;

  dispatch(setLoadingAction({ isResetPasswordLoading: true }));

  const response = await fetch(`${API_URL}/accounts/password/reset/`, {
    method: 'POST',
    body: JSON.stringify({
      ...restOfPayload,
      verification_token: verificationToken,
    }),
    headers: publicHeaders,
  });

  const responseJson = await response.json();

  if (!response.ok) {
    dispatch(receiveErrorAction({ resetPasswordError: responseJson }));
  } else {
    const { user, token } = responseJson;
    dispatch(clearErrorsAction());
    dispatch(receiveUserAction({ ...user, token }));
  }

  dispatch(setLoadingAction({ isResetPasswordLoading: false }));
};

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case 'SIGN_UP':
      await signUp(action, store);
      break;
    case 'LOG_IN':
      await logIn(action, store);
      break;
    case 'LOG_OUT':
      await logOut(action, store);
      break;
    case 'GET_USER':
      await getUser(action, store);
      break;
    case 'FORGOT_PASSWORD':
      await forgotPassword(action, store);
      break;
    case 'RESET_PASSWORD':
      await resetPassword(action, store);
      break;
    default:
      break;
  }

  return next(action);
};

export default userMiddleware;
