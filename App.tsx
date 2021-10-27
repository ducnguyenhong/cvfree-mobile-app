import React, { useEffect } from 'react';
import { Router } from './src/routers/router';
import store, { persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
        <Toast ref={ref => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  );
}
