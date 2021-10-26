import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Cvs } from '../admin-area/cv';
import { Jobs } from '../admin-area/job';
import { HomeScreen } from '../home';
import { SettingScreen } from '../setting/setting';
// import { styles } from './home.styles';
const Tab = createBottomTabNavigator();

const getIconTab = (route: string) => {
  switch (route) {
    case 'Home':
      return 'home';

    case 'Setting':
      return 'user-circle';

    case 'Job':
      return 'briefcase';

    case 'Cv':
      return 'paste';

    default:
      return '';
  }
};

export const TabsHome: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // if (route.name === 'CreateTab') {
          //   return (
          //     <View style={styles.vButtonCreate}>
          //       <Icon
          //         name="plus"
          //         size={size}
          //         color={color}
          //         style={styles.icCreate}
          //       />
          //     </View>
          //   );
          // }
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
        headerShown: true,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Job" component={Jobs} />
      <Tab.Screen name="Cv" component={Cvs} />
      {/* <Tab.Screen name="CreateTab" component={CreateScreen} /> */}
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};
