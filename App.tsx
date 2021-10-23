import React, { useEffect } from 'react';
import { setupAxios } from './src/utils/setup-axios';
import { Router } from './src/routers/router';
import store, { persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  useEffect(() => {
    setupAxios();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}
