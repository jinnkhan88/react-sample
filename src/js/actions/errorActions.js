const clearErrorsAction = () => ({
  type: 'CLEAR_ERRORS',
});

const receiveErrorAction = (payload) => ({
  type: 'RECEIVE_ERROR',
  payload,
});

export { clearErrorsAction, receiveErrorAction };
