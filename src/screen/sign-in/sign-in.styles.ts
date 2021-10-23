import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { StyleSheet } from 'react-native';
import * as fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 50,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },

  vLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgLogo: {
    width: 100,
    height: 100,
  },

  tHello: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontFamily: fonts.FontQsBold,
    fontSize: 22,
  },

  ipUsername: {
    backgroundColor: '#F4F6F8',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 15,
  },

  ipPassword: {
    marginTop: 30,
    backgroundColor: '#F4F6F8',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 15,
  },

  tSignIn: {
    marginTop: 40,
    backgroundColor: '#15A262',
    textAlign: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    color: '#fff',
    fontSize: 17,
    fontFamily: fonts.FontQsSemiBold,
  },

  tForgotPass: {
    textAlign: 'right',
    color: 'green',
    marginTop: 15,
    fontSize: 15,
    fontFamily: fonts.FontQsSemiBold,
  },

  vRegister: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },

  tDontAcc: {
    marginRight: 5,
    fontSize: 15,
  },

  tRegister: {
    color: 'green',
    fontFamily: fonts.FontQsSemiBold,
    fontSize: 15,
  },

  tErrorUsername: {
    color: '#ED1C1C',
    marginTop: 3,
    fontSize: 15,
  },

  tErrorPassword: {
    color: '#ED1C1C',
    marginTop: 3,
    fontSize: 15,
  },
});
