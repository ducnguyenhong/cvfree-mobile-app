import { Formik } from 'formik';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../../assets/common/logo.png';
import { styles } from './sign-up.styles';
import { initialValues, signInSchema } from './sign-up.types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import md5 from 'md5';
import Toast from 'react-native-toast-message';
import { get } from 'lodash';

export const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfPassword, setShowConfPassword] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.svContainer}>
      <View style={styles.container}>
        <View style={styles.vLogo}>
          <Image source={Logo} style={styles.imgLogo} resizeMode="contain" />
        </View>

        <Text style={styles.tHello}>Register an account</Text>

        <View>
          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values, { setSubmitting }) => {
              axios
                .post('/auth/sign-up', {
                  username: values.username,
                  password: md5(values.password),
                  email: values.email,
                  type: 'USER',
                })
                .then((response: any) => {
                  const { error, success } = response.data;
                  if (!success || response.status > 400) {
                    throw new Error(get(error, 'message'));
                  }

                  setSubmitting(false);
                  Toast.show({
                    type: 'success',
                    text1: 'Email verification',
                    text2:
                      'Check your registered email and click on the verification link',
                    autoHide: false,
                  });
                  navigation.navigate('SignIn');
                })
                .catch(e => {
                  setSubmitting(false);
                  Toast.show({
                    type: 'error',
                    text1: 'Registration failed',
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
            }) => (
              <View>
                <View>
                  <TextInput
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    placeholder="Username"
                    autoCapitalize="none"
                    style={styles.ipUsername}
                    returnKeyType="next"
                  />
                  <Text style={styles.tErrorUsername}>
                    {errors.username && touched.username && errors.username}
                  </Text>
                </View>
                <View style={styles.vPassword}>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    placeholder="Password"
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
                <View style={styles.vPassword}>
                  <TextInput
                    onChangeText={handleChange('confPassword')}
                    onBlur={handleBlur('confPassword')}
                    placeholder="Confirm password"
                    secureTextEntry={!showConfPassword}
                    value={values.confPassword}
                    style={styles.ipPassword}
                    returnKeyType="next"
                  />
                  <Text style={styles.tErrorPassword}>
                    {errors.confPassword &&
                      touched.confPassword &&
                      errors.confPassword}
                  </Text>
                  <Icon
                    name={showConfPassword ? 'eye' : 'eye-slash'}
                    size={25}
                    style={styles.icEye}
                    onPress={() => setShowConfPassword(!showConfPassword)}
                  />
                </View>
                <View>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.ipEmail}
                    returnKeyType="done"
                  />
                  <Text style={styles.tErrorUsername}>
                    {errors.email && touched.email && errors.email}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Text style={styles.tSignInLoading}>Waiting...</Text>
                  ) : (
                    <Text style={styles.tSignIn}>Sign Up</Text>
                  )}
                </TouchableOpacity>
                <View style={styles.vRegister}>
                  <Text style={styles.tDontAcc}>Already have an account!</Text>
                  <Text
                    style={styles.tRegister}
                    onPress={() => navigation.navigate('SignIn')}>
                    Sign in
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};
