import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { useCallback } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/auth/auth-action';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function AccountScreen() {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    Alert.alert('Logout', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(logoutAction());
        },
      },
    ]);
  }, [dispatch]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={onLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const Home: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};
