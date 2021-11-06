import { Formik } from 'formik';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../../assets/common/logo.png';
import { styles } from './sign-in.styles';
import { initialValues, signInSchema } from './sign-in.types';
import { useAppDispatch } from '../../redux/store';
import { loginAction } from '../../redux/auth/auth-action';
import md5 from 'md5';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getDeviceId } from '../../redux/selector/auth-selector';
import uuid from 'react-native-uuid';
import { useTranslation } from 'react-i18next';

export const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const deviceId = useSelector(getDeviceId);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.vLogo}>
        <Image source={Logo} style={styles.imgLogo} resizeMode="contain" />
      </View>

      <Text style={styles.tHello}>{t('SIGN_IN:HELLO_LABEL')}</Text>

      <View>
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(
              loginAction({
                username: values.username,
                password: md5(values.password),
                deviceId: deviceId || `${uuid.v4()}`,
              }),
            )
              .unwrap()
              .then(response => {
                console.log(response);
                setSubmitting(false);
              })
              .catch(() => {
                setSubmitting(false);
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
          }) => (
            <View>
              <TextInput
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder={t('SIGN_IN:USERNAME')}
                autoCapitalize="none"
                style={styles.ipUsername}
                returnKeyType="next"
              />
              <Text style={styles.tErrorUsername}>
                {errors.username && touched.username && errors.username}
              </Text>
              <View style={styles.vPassword}>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder={t('SIGN_IN:PASSWORD')}
                  secureTextEntry={!showPassword}
                  value={values.password}
                  style={styles.ipPassword}
                  returnKeyType="done"
                />
                <Text style={styles.tErrorPassword}>
                  {errors.password && touched.password && errors.password}
                </Text>
                <Icon
                  name={showPassword ? 'eye' : 'eye-slash'}
                  size={25}
                  style={styles.icEye}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                disabled={isSubmitting}>
                {isSubmitting ? (
                  <Text style={styles.tSignInLoading}>
                    {t('SIGN_IN:WAITING')}...
                  </Text>
                ) : (
                  <Text style={styles.tSignIn}>{t('SIGN_IN:SIGN_IN')}</Text>
                )}
              </TouchableOpacity>
              <Text style={styles.tForgotPass}>
                {t('SIGN_IN:FORGOT_PASS')}?
              </Text>
              <View style={styles.vRegister}>
                <Text style={styles.tDontAcc}>
                  {t('SIGN_IN:DONT_HAVE_ACC')}!
                </Text>
                <Text
                  style={styles.tRegister}
                  onPress={() => navigation.navigate('SignUp')}>
                  {t('SIGN_IN:REGISTER')}
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
