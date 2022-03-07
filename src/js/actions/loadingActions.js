const resetLoadingAction = () => ({
  type: 'RESET_LOADING',
});

const setLoadingAction = (payload) => ({
  type: 'SET_LOADING',
  payload,
});

export { resetLoadingAction, setLoadingAction };
