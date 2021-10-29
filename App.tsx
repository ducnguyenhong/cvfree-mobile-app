import React, { useEffect } from 'react';
import { Router } from './src/routers/router';
import store, { persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import { FontQsRegular } from './src/constants/fonts';
import GlobalFont from './src/utils/global-font';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
    GlobalFont.applyGlobal(FontQsRegular);
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
