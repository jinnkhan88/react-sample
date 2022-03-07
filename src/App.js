import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import RootContainer from 'containers/RootContainer';
import { persistor, store } from 'js/store';

const App = () => (
  <Provider store={store}>
    {/* TODO: remove PersistGate if there is no persistence needed */}
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <RootContainer />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
