import { createPersistedReducer, formatUser } from './utils';

const receiveUser = (userState, { payload }) => formatUser(payload);

const clearUser = () => ({});

const userReducer = createPersistedReducer({}, {
  RECEIVE_USER: receiveUser,
  CLEAR_USER: clearUser,
}, 'user');

export default userReducer;
