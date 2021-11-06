import { StyleSheet } from 'react-native';
import * as fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f3f3',
  },

  vUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
    backgroundColor: '#fff',
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  vUserContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vName: {
    marginLeft: 10,
  },

  imgAvatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  tFullname: {
    textTransform: 'uppercase',
    fontFamily: fonts.FontQsBold,
    fontSize: 17,
  },

  tUsername: {
    marginTop: 3,
    fontSize: 15,
    color: '#AFAFAF',
  },

  vListOption: {
    marginTop: 15,
    backgroundColor: '#fff',
  },

  toRowOption: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  vRowOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  vRowOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vTextOption: {
    marginLeft: 20,
  },

  tOptionName: {
    fontFamily: fonts.FontQsSemiBold,
    fontSize: 15,
    color: '#4D4D4D',
  },

  tOptionSubName: {
    color: '#AFAFAF',
    marginTop: 3,
  },

  vVersion: {
    alignItems: 'flex-end',
    padding: 10,
  },

  tVersion: {},

  // modal change language

  vmdChangeLang: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  vCLIconClose: {
    alignItems: 'flex-end',
  },

  icCLClose: {
    fontSize: 20,
    padding: 15,
  },

  vCLContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 40,
  },

  toCLLangVN: {
    marginRight: 40,
    alignItems: 'center',
  },

  imgCLFlagVN: {
    width: 80,
    height: 60,
  },

  tCLLangVN: {
    fontFamily: fonts.FontQsSemiBold,
  },

  toCLLangEN: {
    alignItems: 'center',
  },

  imgCLFlagEN: {
    width: 80,
    height: 60,
  },

  tCLLangEN: {
    fontFamily: fonts.FontQsSemiBold,
  },

  // end change language

  // modal logout

  vmdLogout: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  vLOIconClose: {
    alignItems: 'flex-end',
  },

  icLOClose: {
    fontSize: 20,
    padding: 15,
  },

  vLOContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 40,
  },

  tLOConfirm: {
    fontFamily: fonts.FontQsBold,
    fontSize: 17,
  },

  vLOControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  toLOOk: {
    paddingVertical: 10,
    backgroundColor: '#E80F0F',
    width: 100,
    alignItems: 'center',
    marginRight: 30,
    borderRadius: 5,
  },

  tLOOk: {
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: fonts.FontQsSemiBold,
  },

  toLOCancel: {
    paddingVertical: 10,
    width: 100,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    backgroundColor: '#F7F7F7',
  },

  tLOCancel: {
    textTransform: 'uppercase',
    fontFamily: fonts.FontQsSemiBold,
  },

  // end logout
});
