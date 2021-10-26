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

export const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.vLogo}>
        <Image source={Logo} style={styles.imgLogo} resizeMode="contain" />
      </View>

      <Text style={styles.tHello}>Welcome to CVFREE</Text>

      <View>
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(
              loginAction({
                username: values.username,
                password: md5(values.password),
              }),
            )
              .unwrap()
              .then(response => {
                console.log(response);
                setSubmitting(false);
              })
              .catch(error => {
                console.log('ducnh3', error);
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
                placeholder="Username"
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
              <TouchableOpacity onPress={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? (
                  <Text style={styles.tSignInLoading}>Waiting...</Text>
                ) : (
                  <Text style={styles.tSignIn}>Sign In</Text>
                )}
              </TouchableOpacity>
              <Text style={styles.tForgotPass}>Forgot password?</Text>
              <View style={styles.vRegister}>
                <Text style={styles.tDontAcc}>Don't have an account!</Text>
                <Text
                  style={styles.tRegister}
                  onPress={() => navigation.navigate('SignUp')}>
                  Register
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
