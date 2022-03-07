import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import middlewares from 'js/middlewares';
import rootReducer from 'js/reducers';

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };
