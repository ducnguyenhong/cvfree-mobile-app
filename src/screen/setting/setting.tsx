import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
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
  const [showLogout, setShowLogout] = useState<boolean>(false);

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
                <Text style={styles.tOptionName}>{t('SETTING:CV_LIST')}</Text>
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
                <Text style={styles.tOptionName}>
                  {t('SETTING:LIST_JOB_APPLIED')}
                </Text>
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
                <Text style={styles.tOptionName}>
                  {t('SETTING:TERM_OF_USE')}
                </Text>
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
                <Text style={styles.tOptionName}>
                  {t('SETTING:PRIVACY_POLICY')}
                </Text>
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
                <Text style={styles.tOptionName}>{t('SETTING:ABOUT_US')}</Text>
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
                <Text style={styles.tOptionName}>
                  {t('SETTING:CHANGE_PASS')}
                </Text>
              </View>
            </View>
            <Icon name="chevron-right" size={15} color="#DBDBDB" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.toRowOption}
          onPress={() => setShowLogout(true)}>
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
          <View style={styles.vmdChangeLang}>
            <View style={styles.vCLIconClose}>
              <Icon
                name="times"
                onPress={() => setShowChangeLang(false)}
                style={styles.icCLClose}
              />
            </View>
            <View style={styles.vCLContent}>
              <TouchableOpacity
                style={styles.toCLLangVN}
                activeOpacity={0.8}
                onPress={() => {
                  i18n.changeLanguage('vi');
                  setShowChangeLang(false);
                }}>
                <Image
                  source={ImageFlagVI}
                  style={styles.imgCLFlagVN}
                  resizeMode="contain"
                />
                <Text style={styles.tCLLangVN}>Tiếng Việt</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.toCLLangEN}
                activeOpacity={0.8}
                onPress={() => {
                  i18n.changeLanguage('en');
                  setShowChangeLang(false);
                }}>
                <Image
                  source={ImageFlagEN}
                  style={styles.imgCLFlagEN}
                  resizeMode="contain"
                />
                <Text style={styles.tCLLangEN}>English</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal isVisible={showLogout}>
        <View>
          <View style={styles.vmdLogout}>
            <View style={styles.vLOIconClose}>
              <Icon
                name="times"
                onPress={() => setShowLogout(false)}
                style={styles.icLOClose}
              />
            </View>
            <View style={styles.vLOContent}>
              <Text style={styles.tLOConfirm}>Xác nhận đăng xuất ?</Text>
              <View style={styles.vLOControl}>
                <TouchableOpacity
                  style={styles.toLOOk}
                  activeOpacity={0.8}
                  onPress={() => dispatch(logoutAction())}>
                  <Text style={styles.tLOOk}>Ok</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.toLOCancel}
                  activeOpacity={0.8}
                  onPress={() => setShowLogout(false)}>
                  <Text style={styles.tLOCancel}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
