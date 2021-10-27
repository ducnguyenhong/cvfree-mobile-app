import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ChangePassword } from '../screen/change-password';
import { TabsHome } from '../screen/tab-home';
import { RootStackParamList } from './router.type';
import { SearchScreen } from '../screen/search';

const Stack = createStackNavigator<RootStackParamList>();

export const AppRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TabsHome">
      <Stack.Screen name="TabsHome" component={TabsHome} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
