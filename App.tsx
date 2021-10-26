import React from 'react';
import { Router } from './src/routers/router';
import store, { persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
        <Toast ref={ref => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  );
}
