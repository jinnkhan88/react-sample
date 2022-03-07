import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const createReducer = (initialState, handlers) => (
  (state = initialState, action) => (action.type in handlers
    ? handlers[action.type](state, action)
    : state
  )
);

const createPersistedReducer = (initialState, handlers, key) => {
  const config = { key, storage };

  return persistReducer(config, createReducer(initialState, handlers));
};

const formatUser = (user) => {
  const {
    first_name: firstName,
    last_name: lastName,
    full_name: fullName,
    ...restOfUser
  } = user;

  return {
    ...restOfUser,
    firstName,
    lastName,
    fullName,
  };
};

export {
  createReducer,
  createPersistedReducer,
  formatUser,
};
