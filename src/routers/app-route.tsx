import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TabsHome } from '../screen/tab-home';

const Stack = createStackNavigator();

export const AppRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TabsHome">
      <Stack.Screen name="TabsHome" component={TabsHome} />
    </Stack.Navigator>
  );
};
