import React, { useCallback } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../redux/auth/auth-action';
import { styles } from './setting.styles';
import DefaultAvatar from '../../assets/common/default-avatar.jpg';
import { getUserInfo } from '../../redux/selector/auth-selector';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const SettingScreen: React.FC = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(getUserInfo);
  const { username, avatar, fullname } = userInfo;

  const onSignOut = useCallback(() => {
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
    <View style={styles.container}>
      <View style={styles.vUserInfo}>
        <Image source={avatar || DefaultAvatar} style={styles.imgAvatar} />
        <View style={styles.vName}>
          <Text style={styles.tFullname}>{fullname}</Text>
          <Text style={styles.tUsername}>@{username}</Text>
        </View>
      </View>

      <View style={styles.vListOption}>
        <View style={styles.vRowOption}>
          <View style={styles.vRowOptionLeft}>
            <Icon name="globe-americas" size={20} />
            <View style={styles.vTextOption}>
              <Text style={styles.tOptionName}>Language</Text>
              <Text style={styles.tOptionSubName}>English</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={15} color="#DBDBDB" />
        </View>

        <View style={styles.vRowOption} onTouchStart={onSignOut}>
          <View style={styles.vRowOptionLeft}>
            <Icon name="sign-out-alt" size={20} />
            <View style={styles.vTextOption}>
              <Text style={styles.tOptionName}>Sign out</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={15} color="#DBDBDB" />
        </View>
      </View>
    </View>
  );
};
