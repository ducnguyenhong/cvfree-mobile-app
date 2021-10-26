import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignIn } from '../screen/sign-in';
import { RootStackParamList } from './router.type';

const Stack = createStackNavigator<RootStackParamList>();

export const AuthRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};
