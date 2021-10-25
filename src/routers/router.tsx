import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { AppRoute } from './app-route';
import { AuthRoute } from './auth-route';
import { getUserToken, getUserInfo } from '../redux/selector/auth-selector';
import { setupAxios, setupAxiosResponse } from '../utils/setup-axios';

export function Router() {
  const token = useSelector(getUserToken);
  const userInfo = useSelector(getUserInfo);

  useEffect(() => {
    setupAxios(token);
    setupAxiosResponse();
  }, [token]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {token && userInfo ? <AppRoute /> : <AuthRoute />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
