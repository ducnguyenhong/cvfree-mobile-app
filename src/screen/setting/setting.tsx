import React, { useCallback, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../redux/auth/auth-action';
import { styles } from './setting.styles';
import DefaultAvatar from '../../assets/common/default-avatar.jpg';
import { getUserInfo } from '../../redux/selector/auth-selector';
import Icon from 'react-native-vector-icons/FontAwesome5';
import packageJson from '../../../package.json';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Modal from 'react-native-modal';
import ImageFlagVI from '../../assets/lang/vi.png';
import ImageFlagEN from '../../assets/lang/en.png';

export const SettingScreen: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const userInfo = useSelector(getUserInfo);
  const { username, avatar, fullname } = userInfo;
  const navigation = useNavigation<any>();
  const [showChangeLang, setShowChangeLang] = useState<boolean>(false);

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
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ProfileScreen')}>
        <View style={styles.vUserInfo}>
          <View style={styles.vUserContent}>
            <Image source={avatar || DefaultAvatar} style={styles.imgAvatar} />
            <View style={styles.vName}>
              <Text style={styles.tFullname}>{fullname}</Text>
              <Text style={styles.tUsername}>@{username}</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={15} color="#DBDBDB" />
        </View>
      </TouchableOpacity>

      <View style={styles.vListOption}>
        <TouchableOpacity activeOpacity={0.7} style={styles.toRowOption}>
          <View style={styles.vRowOption}>
            <View style={styles.vRowOptionLeft}>
              <Icon name="paste" size={18} color="#F2C13E" />
              <View style={styles.vTextOption}>
                <Text style={styles.tOptionName}>CV list</Text>
              </View>
            </View>
            <Icon name="chevron-right" size={15} color="#DBDBDB" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.toRowOption}>
          <View style={styles.vRowOption}>
            <View style={styles.vRowOptionLeft}>
              <Icon name="briefcase" size={18} color="#C917CE" />
              <View style={styles.vTextOption}>
                <Text style={styles.tOptionName}>List of jobs applied for</Text>
              </View>
            </View>
            <Icon name="chevron-right" size={15} color="#DBDBDB" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.vListOption}>
        <TouchableOpacity activeOpacity={0.7} style={styles.toRowOption}>
          <View style={styles.vRowOption}>
            <View style={styles.vRowOptionLeft}>
              <Icon name="atlas" size={18} color="#4DD6B7" />
              <View style={styles.vTextOption}>
                <Text style={styles.tOptionName}>Term of use</Text>
              </View>
            </View>
            <Icon name="chevron-right" size={15} color="#DBDBDB" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.toRowOption}>
          <View style={styles.vRowOption}>
            <View style={styles.vRowOptionLeft}>
              <Icon name="shield-alt" size={18} color="#81E30F" />
              <View style={styles.vTextOption}>
                <Text style={styles.tOptionName}>Privacy policy</Text>
              </View>
            </View>
            <Icon name="chevron-right" size={15} color="#DBDBDB" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.toRowOption}>
          <View style={styles.vRowOption}>
            <View style={styles.vRowOptionLeft}>
              <Icon name="info-circle" size={18} color="#6493D8" />
              <View style={styles.vTextOption}>
                <Text style={styles.tOptionName}>About us</Text>
              </View>
            </View>
            <Icon name="chevron-right" size={15} color="#DBDBDB" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.vListOption}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.toRowOption}
          onPress={() => setShowChangeLang(true)}>
          <View style={styles.vRowOption}>
            <View style={styles.vRowOptionLeft}>
              <Icon name="globe-americas" size={18} color="#4389ED" />
              <View style={styles.vTextOption}>
                <Text style={styles.tOptionName}>{t('SETTING:LANGUAGE')}</Text>
                <Text style={styles.tOptionSubName}>
                  {t('SETTING:CURRENT_LANGUAGE')}
                </Text>
              </View>
            </View>
            <Icon name="chevron-right" size={15} color="#DBDBDB" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.toRowOption}
          onPress={() => navigation.navigate('ChangePassword')}>
          <View style={styles.vRowOption}>
            <View style={styles.vRowOptionLeft}>
              <Icon name="lock" size={18} color="#4DAD6C" />
              <View style={styles.vTextOption}>
                <Text style={styles.tOptionName}>Change password</Text>
              </View>
            </View>
            <Icon name="chevron-right" size={15} color="#DBDBDB" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.toRowOption}
          onPress={onSignOut}>
          <View style={styles.vRowOption}>
            <View style={styles.vRowOptionLeft}>
              <Icon name="power-off" size={18} color="#FF4B4B" />
              <View style={styles.vTextOption}>
                <Text style={styles.tOptionName}>{t('SETTING:SIGN_OUT')}</Text>
              </View>
            </View>
            <Icon name="chevron-right" size={15} color="#DBDBDB" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.vVersion}>
        <Text style={styles.tVersion}>Version: {packageJson.version}</Text>
      </View>

      <Modal isVisible={showChangeLang}>
        <View>
          <View style={{ backgroundColor: '#fff' }}>
            <View>
              <Icon name="times" onPress={() => setShowChangeLang(false)} />
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  // dispatch(changeLanguage({ lang: 'vi' }));
                  i18n.changeLanguage('vi');
                  setShowChangeLang(false);
                }}>
                <Image source={ImageFlagVI} />
                <Text>Tiếng Việt</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  // dispatch(changeLanguage({ lang: 'en' }));
                  i18n.changeLanguage('en');
                  setShowChangeLang(false);
                }}>
                <Image source={ImageFlagEN} />
                <Text>English</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
