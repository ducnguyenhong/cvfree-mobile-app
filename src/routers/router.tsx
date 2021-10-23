import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { AppRoute } from './app-route';
import { AuthRoute } from './auth-route';
import { getUserToken, getUserInfo } from '../redux/selector/auth-selector';

export function Router() {
  const token = useSelector(getUserToken);
  const userInfo = useSelector(getUserInfo);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {token && userInfo ? <AppRoute /> : <AuthRoute />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
