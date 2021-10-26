import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignIn } from '../screen/sign-in';
import { SignUp } from '../screen/sign-up';
import { RootStackParamList } from './router.type';

const Stack = createStackNavigator<RootStackParamList>();

export const AuthRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
