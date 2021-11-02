import { Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './profile-update.styles';
import { updateInfoSchema, UpdateInfoValues } from './profile-update.type';
import dayjs from 'dayjs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/selector/auth-selector';
import {
  check,
  PERMISSIONS,
  request,
  openSettings,
} from 'react-native-permissions';
import { PERMISSION_STATUS } from '../../constants/permission-status';
import Toast from 'react-native-toast-message';
import Modal from 'react-native-modal';
import { uploadServer } from '../../utils/upload-server';
import uuid from 'react-native-uuid';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import DropdownPicker from 'react-native-dropdown-picker';
import { updateUserInfo } from '../../redux/auth/auth-action';

interface ItemDropdown {
  label: string;
  value: string;
}

const DataGenders = [
  { label: 'Male', value: 'MALE' },
  { label: 'Female', value: 'FEMALE' },
];

export const UpdateProfileScreen: React.FC = () => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showModalSetting, setShowModalSetting] = useState<boolean>(false);
  const userInfo = useSelector(getUserInfo);
  const { fullname, birthday, email, phone, address, gender, _id, avatar } =
    userInfo;
  const [uriAvatar, setUriAvatar] = useState<string | undefined>(
    avatar || undefined,
  );
  const [typeAvatar, setTypeAvatar] = useState<string | undefined>(undefined);

  const [openGender, setOpenGender] = useState<boolean>(false);
  const [itemsGender, setItemsGender] = useState<ItemDropdown[]>(DataGenders);
  const [valueGender, setValueGender] = useState<string | undefined>(gender);

  const dispatch = useDispatch();

  const initialValues: UpdateInfoValues = {
    fullname: fullname || '',
    email,
    phone: phone || '',
    address: address,
    birthday: dayjs(birthday).format('DD/MM/YYYY'),
    gender: gender || '',
    avatar: '',
  };

  const onChooseAvatar = useCallback(() => {
    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
      .then(status => {
        if (status === PERMISSION_STATUS.GRANTED) {
          ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
          }).then(image => {
            console.log(image);
            const { mime, path } = image;
            setUriAvatar(path);
            setTypeAvatar(mime);
            // uploadServer(
            //   {
            //     uri: path,
            //     name: `${uuid.v4()}`,
            //     type: mime,
            //   },
            //   `${uuid.v4()}`,
            // )
            //   .then(imageUrl => {
            //     console.log('ducnh8', imageUrl);
            //   })
            //   .catch(e => console.log('ducnh9', e.message));
          });

          // launchImageLibrary(options, response => {
          //   console.log('ducnh5', response);
          //   if (response.didCancel) {
          //     console.log('User cancelled image picker');
          //   } else if (response.errorMessage) {
          //     console.log('ImagePicker Error: ', response.errorMessage);
          //   } else {
          //     if (response.assets && response.assets.length) {
          //       const { uri, type } = response.assets[0];
          //       uploadServer(
          //         {
          //           uri,
          //           name: `${uuid.v4()}`,
          //           type,
          //         },
          //         `${uuid.v4()}`,
          //       )
          //         .then(imageUrl => {
          //           console.log('ducnh8', imageUrl);
          //         })
          //         .catch(e => console.log('ducnh9', e.message));
          //     }
          //   }
          // });
        } else if (status === PERMISSION_STATUS.BLOCKED) {
          setShowModalSetting(true);
        } else {
          request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
            .then(result => {
              switch (result) {
                case PERMISSION_STATUS.UNAVAILABLE: {
                  Toast.show({
                    type: 'error',
                    text1: 'Unavailable!',
                    text2: 'This feature is not available on your device',
                    autoHide: false,
                  });
                  break;
                }

                case PERMISSION_STATUS.DENIED: {
                  Toast.show({
                    type: 'error',
                    text1: 'Please allow permissions!',
                    text2: "We need access to your device's photo system",
                    autoHide: false,
                  });
                  break;
                }

                case PERMISSION_STATUS.BLOCKED: {
                  Toast.show({
                    type: 'error',
                    text1: 'Please allow permissions!',
                    text2: "We need access to your device's photo system",
                    autoHide: false,
                  });
                  break;
                }

                default:
                  break;
              }
            })
            .catch(e => {
              Toast.show({
                type: 'error',
                text1: 'Error',
                text2: e.message,
                autoHide: false,
              });
            });
        }
      })
      .catch(e => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: e.message,
          autoHide: false,
        });
      });
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
      style={styles.vContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={updateInfoSchema}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .put(`/users/${_id}`, {
              fullname: values.fullname,
              email: values.email,
              phone: values.phone,
              gender: values.gender,
              birthday: values.birthday,
              avatar: uriAvatar ? values.avatar : undefined,
              avatarId: uuid.v4(),
              verify: true,
              status: 'ACTIVE',
            })
            .then((response: any) => {
              const { success, error, data } = response.data;
              if (!success || response.status > 400) {
                throw new Error(error.message);
              }
              Toast.show({
                type: 'success',
                text1: 'Successfully updated',
              });
              setSubmitting(false);
              dispatch(updateUserInfo(data.userDetail));
            })
            .catch(e => {
              setSubmitting(false);
              Toast.show({
                type: 'error',
                text1: 'Error',
                text2: e.message,
                autoHide: false,
              });
            });
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <View>
            <View style={styles.vItemInput}>
              <Text style={styles.tLabelInput}>Avatar</Text>
              <View style={styles.vRowInputAvatar}>
                <View style={styles.vInputAvatar}>
                  {uriAvatar ? (
                    <TouchableOpacity
                      style={styles.toClearAvatar}
                      onPress={() => setUriAvatar(undefined)}>
                      <Icon name="times" style={styles.icClearAvatar} />
                    </TouchableOpacity>
                  ) : null}
                  <TouchableOpacity
                    onPress={onChooseAvatar}
                    style={styles.toInputAvatar}
                    activeOpacity={0.8}>
                    <Icon name="plus-circle" style={styles.icInputAvatar} />

                    <Image
                      source={{ uri: uriAvatar }}
                      style={styles.imgInputAvatar}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.tErrorInput}>
                {errors.avatar && touched.avatar && errors.avatar}
              </Text>
            </View>

            <View style={styles.vItemInput}>
              <Text style={styles.tLabelInput}>Fullname</Text>
              <View style={styles.vInputElement}>
                <TextInput
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  value={values.fullname}
                  style={styles.ipElement}
                  returnKeyType="next"
                />
                <Icon name="user" style={styles.icInput} />
              </View>
              <Text style={styles.tErrorInput}>
                {errors.fullname && touched.fullname && errors.fullname}
              </Text>
            </View>

            <View style={styles.vItemInput}>
              <Text style={styles.tLabelInput}>Phone</Text>
              <View style={styles.vInputElement}>
                <TextInput
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  autoCapitalize="none"
                  style={styles.ipElement}
                  returnKeyType="next"
                />
                <Icon name="phone" style={styles.icInput} />
              </View>
              <Text style={styles.tErrorInput}>
                {errors.phone && touched.phone && errors.phone}
              </Text>
            </View>

            <View style={styles.vItemInput}>
              <Text style={styles.tLabelInput}>Birthday</Text>
              <View style={styles.vInputElement}>
                <TouchableOpacity
                  style={styles.ipElementDate}
                  activeOpacity={0.9}
                  onPress={() => setShowDatePicker(true)}>
                  {values.birthday && <Text>{values.birthday}</Text>}
                </TouchableOpacity>
                <Icon name="birthday-cake" style={styles.icInput} />
                <DateTimePickerModal
                  isVisible={showDatePicker}
                  mode="date"
                  onConfirm={date =>
                    setFieldValue('birthday', dayjs(date).format('DD/MM/YYYY'))
                  }
                  onCancel={() => setShowDatePicker(false)}
                />
              </View>
              <Text style={styles.tErrorInput}>
                {errors.phone && touched.phone && errors.phone}
              </Text>
            </View>

            <View style={styles.vItemInput}>
              <Text style={styles.tLabelInput}>Email</Text>
              <View style={styles.vInputElement}>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  autoCapitalize="none"
                  style={styles.ipElement}
                  returnKeyType="next"
                />
                <Icon name="envelope" style={styles.icInput} />
              </View>
              <Text style={styles.tErrorInput}>
                {errors.email && touched.email && errors.email}
              </Text>
            </View>

            <View style={styles.vItemInput}>
              <Text style={styles.tLabelInput}>Gender</Text>
              <View style={styles.vInputElement}>
                <DropdownPicker
                  style={styles.dpGender}
                  open={openGender}
                  setOpen={setOpenGender}
                  items={itemsGender}
                  setItems={setItemsGender}
                  value={valueGender || null}
                  setValue={setValueGender}
                  scrollViewProps={{ nestedScrollEnabled: true }}
                  listMode="SCROLLVIEW"
                />
              </View>
              <Text style={styles.tErrorInput}>
                {errors.email && touched.email && errors.email}
              </Text>
            </View>

            <View style={styles.vBtnUpdate}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.toBtnUpdate}
                disabled={isSubmitting}
                onPress={() => {
                  uploadServer(
                    uriAvatar && uriAvatar !== avatar
                      ? {
                        uri: uriAvatar,
                        name: `${uuid.v4()}`,
                        type: typeAvatar,
                      }
                      : null,
                    `${uuid.v4()}`,
                  )
                    .then(imageUrl => {
                      setFieldValue('avatar', imageUrl);
                      handleSubmit();
                    })
                    .catch(e => console.log('ducnh9', e.message));
                }}>
                <Text style={styles.tBtnUpdate}>Update</Text>
              </TouchableOpacity>
            </View>

            <Modal isVisible={showModalSetting}>
              <View>
                <View style={styles.mdGoSetting}>
                  <View style={styles.vGSIconClose}>
                    <Icon
                      name="times"
                      onPress={() => setShowModalSetting(false)}
                      style={styles.icGSClose}
                    />
                  </View>
                  <View style={styles.vGSContent}>
                    <Text style={styles.tGSContent}>
                      You have not allowed access to the photo system
                    </Text>
                    <Text style={styles.tGSContent}>
                      Go to app settings and open permissions again!
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.toGSSetting}
                    activeOpacity={0.8}
                    onPress={() => {
                      openSettings().catch(e =>
                        Toast.show({
                          type: 'error',
                          text1: 'Error',
                          text2: e.message,
                          autoHide: false,
                        }),
                      );
                    }}>
                    <Text style={styles.tGSSetting}>Go to settings</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
