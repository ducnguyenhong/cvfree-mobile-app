import { StyleSheet } from 'react-native';
import * as fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  svContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },

  container: {
    paddingHorizontal: 25,
    paddingTop: 50,
  },

  vLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgLogo: {
    width: 70,
    height: 70,
  },

  tHello: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 30,
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

  ipEmail: {
    backgroundColor: '#F4F6F8',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 15,
    marginTop: 10,
  },

  vPassword: {
    marginTop: 10,
    position: 'relative',
  },

  icEye: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#797C7C',
  },

  ipPassword: {
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

  tSignInLoading: {
    marginTop: 40,
    backgroundColor: '#71716C',
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
