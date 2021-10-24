import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SettingScreen } from '../setting/setting';
import { styles } from './home.styles';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function CreateScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Create</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const getIconTab = (route: string) => {
  switch (route) {
    case 'Home':
      return 'home';
    case 'Setting':
      return 'cog';
    default:
      return '';
  }
};

export const Home: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Create') {
            return (
              <View style={styles.vButtonCreate}>
                <Icon
                  name="plus"
                  size={size}
                  color={color}
                  style={styles.icCreate}
                />
              </View>
            );
          }
          return <Icon name={getIconTab(route.name)} size={20} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60 },
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: '#05A705',
          height: 60,
        },
        headerTitleStyle: {
          color: '#fff',
        },
        tabBarLabelStyle: {
          textTransform: 'uppercase',
        },
        headerShown: route.name === 'Setting',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};
