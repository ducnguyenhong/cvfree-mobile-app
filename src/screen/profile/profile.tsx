import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/selector/auth-selector';
import DefaultAvatar from '../../assets/common/default-avatar.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import dayjs from 'dayjs';
import { styles } from './profile.styles';
import { useNavigation } from '@react-navigation/native';

export const ProfileScreen: React.FC = () => {
  const userInfo = useSelector(getUserInfo);
  const navigation = useNavigation<any>();

  const { fullname, birthday, phone, address, email, gender, username } =
    userInfo;

  return (
    <SafeAreaView style={styles.savContainer}>
      <View style={styles.vContainer}>
        <View style={styles.vTopInfo}>
          <Image
            source={DefaultAvatar}
            style={styles.imgAvatar}
            resizeMode="contain"
          />
          <Text style={styles.tFullname}>{fullname}</Text>
          <Text style={styles.tUsername}>@{username}</Text>
          <TouchableOpacity
            style={styles.toEdit}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('UpdateProfileScreen')}>
            <Icon name="edit" style={styles.icEdit} />
            <Text style={styles.tEdit}>Edit profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vBottomInfo}>
          <View style={styles.vGroupInfo}>
            <View style={styles.vSection}>
              <Text style={styles.tSection}>Content</Text>
            </View>
            <View style={styles.vContentInfo}>
              <View style={styles.vItemInfo}>
                <View style={styles.vItemInfoLeft}>
                  <Icon name="birthday-cake" style={styles.icItemInfo} />
                  <Text style={styles.tLabelInfo}>Birthday</Text>
                </View>
                <Text style={styles.tValueInfo}>
                  {dayjs(birthday).format('DD/MM/YYYY')}
                </Text>
              </View>
            </View>
            <View style={styles.vContentInfo}>
              <View style={styles.vItemInfo}>
                <View style={styles.vItemInfoLeft}>
                  <Icon name="transgender" style={styles.icItemInfo} />
                  <Text style={styles.tLabelInfo}>Gennder</Text>
                </View>
                <Text style={styles.tValueInfo}>{gender}</Text>
              </View>
            </View>
          </View>

          <View style={styles.vGroupInfo}>
            <View style={styles.vSection}>
              <Text style={styles.tSection}>Contact</Text>
            </View>
            <View style={styles.vContentInfo}>
              <View style={styles.vItemInfo}>
                <View style={styles.vItemInfoLeft}>
                  <Icon name="phone" style={styles.icItemInfo} />
                  <Text style={styles.tLabelInfo}>Phone</Text>
                </View>
                <Text style={styles.tValueInfo}>{phone}</Text>
              </View>
            </View>
            <View style={styles.vContentInfo}>
              <View style={styles.vItemInfo}>
                <View style={styles.vItemInfoLeft}>
                  <Icon name="envelope" style={styles.icItemInfo} />
                  <Text style={styles.tLabelInfo}>Email</Text>
                </View>
                <Text style={styles.tValueInfo}>{email}</Text>
              </View>
            </View>
            <View style={styles.vContentInfo}>
              <View style={styles.vItemInfo}>
                <View style={styles.vItemInfoLeft}>
                  <Icon name="map-marker-alt" style={styles.icItemInfo} />
                  <Text style={styles.tLabelInfo}>Address</Text>
                </View>
                <Text style={styles.tValueInfo}>{address?.label}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
