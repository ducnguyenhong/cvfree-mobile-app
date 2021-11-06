import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ChangePassword } from '../screen/change-password';
import { TabsHome } from '../screen/tab-home';
import { RootStackParamList } from './router.type';
import { SearchScreen } from '../screen/search';
import { ProfileScreen } from '../screen/profile';
import { HeaderStack } from '../components/header-stack';
import { UpdateProfileScreen } from '../screen/profile-update';
import { JobDetail } from '../screen/job-detail';
import { CvDetail } from '../screen/cv-detail';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator<RootStackParamList>();

export const AppRoute = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TabsHome">
      <Stack.Screen name="TabsHome" component={TabsHome} />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          header: props => (
            <HeaderStack
              {...props}
              backButton
              title={t('COMMON:CHANGE_PASS')}
            />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          header: props => (
            <HeaderStack
              {...props}
              backButton
              title={t('COMMON:INFORMATION')}
            />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="UpdateProfileScreen"
        component={UpdateProfileScreen}
        options={{
          header: props => (
            <HeaderStack
              {...props}
              backButton
              title={t('COMMON:UPDATE_INFO')}
            />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={{
          header: props => (
            <HeaderStack {...props} backButton title={t('COMMON:JOB_DETAIL')} />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="CvDetail"
        component={CvDetail}
        options={{
          header: props => (
            <HeaderStack {...props} backButton title={t('COMMON:CV_DETAIL')} />
          ),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
