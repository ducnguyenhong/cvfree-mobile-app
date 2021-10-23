import { Formik } from 'formik';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../../assets/common/logo.png';
import { styles } from './sign-in.styles';
import { initialValues, signInSchema } from './sign-in.types';
import { useAppDispatch } from '../../redux/store';
import { loginAction } from '../../redux/auth/auth-action';
import md5 from 'md5';

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
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
              })
              .catch(error => console.log('ducnh3', error))
              .finally(() => setSubmitting(false));
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
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Password"
                secureTextEntry
                value={values.password}
                style={styles.ipPassword}
                returnKeyType="done"
              />
              <Text style={styles.tErrorPassword}>
                {errors.password && touched.password && errors.password}
              </Text>
              <TouchableOpacity onPress={handleSubmit} disabled={isSubmitting}>
                <Text style={styles.tSignIn}>Sign In</Text>
              </TouchableOpacity>
              <Text style={styles.tForgotPass}>Forgot password?</Text>
              <View style={styles.vRegister}>
                <Text style={styles.tDontAcc}>Don't have an account!</Text>
                <Text style={styles.tRegister}>Register</Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
