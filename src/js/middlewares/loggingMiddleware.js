const loggingMiddleware = () => (next) => async (action) => {
  if (['staging', 'development'].includes(process.env.REACT_APP_ENV)) {
    // eslint-disable-next-line no-console
    console.log(
      `Dispatched action ${action.type} with payload `,
      action.payload,
    );
  }
  return next(action);
};

export default loggingMiddleware;
