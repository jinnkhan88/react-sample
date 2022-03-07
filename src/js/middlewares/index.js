import loggingMiddleware from './loggingMiddleware';
import userMiddleware from './userMiddleware';

const middlewares = [
  loggingMiddleware,
  userMiddleware,
];

export default middlewares;
