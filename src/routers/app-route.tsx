import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from '../screen/home';

const Stack = createStackNavigator();

export const AppRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
