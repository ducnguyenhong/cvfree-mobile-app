import { StyleSheet } from 'react-native';
import * as fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  // loading
  vLoading: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  vLoadingLeftItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  pmLoadingLeftItem: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  pLoadingItem: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  // nodata

  vNoData: {
    padding: 10,
  },

  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },

  toCvItem: {
    flexDirection: 'row',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,

    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  vCvItem: {
    flexDirection: 'row',
  },

  vCvAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgCvAvatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  vCvContent: {
    marginLeft: 20,
  },

  vFullname: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tFullName: {
    textTransform: 'uppercase',
    fontFamily: fonts.FontQsSemiBold,
    fontSize: 16,
    color: '#000',
    marginRight: 5,
  },

  icGender: {
    marginLeft: 5,
  },

  vBirthday: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },

  icBirthday: {
    color: '#39E039',
  },

  tBirthday: {
    marginLeft: 5,
  },

  vAddress: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },

  icAddress: {
    color: '#39E039',
  },

  tAddress: {
    marginLeft: 5,
  },

  vCareer: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },

  icCareer: {
    color: '#39E039',
  },

  tCareer: {
    marginLeft: 5,
  },
});
