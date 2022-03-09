const receiveUserAction = (payload) => ({ type: 'RECEIVE_USER', payload });

const clearUserAction = () => ({ type: 'CLEAR_USER' });

/*
Sign Up Payload:
- email: string (valid email)
- password: string
- firstName: string
- lastName: string
*/

const signUpAction = (payload) => ({ type: 'SIGN_UP', payload });

const logInAction = (payload) => ({ type: 'LOG_IN', payload });

const logOutAction = () => ({ type: 'LOG_OUT' });

const getUserAction = (payload) => ({ type: 'GET_USER', payload });

const forgotPasswordAction = (payload) => ({ type: 'FORGOT_PASSWORD', payload });

const resetPasswordAction = (payload) => ({ type: 'RESET_PASSWORD', payload });

export {
  clearUserAction,
  forgotPasswordAction,
  getUserAction,
  logInAction,
  logOutAction,
  receiveUserAction,
  resetPasswordAction,
  signUpAction,
};
