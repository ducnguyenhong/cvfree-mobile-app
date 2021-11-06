import { StyleSheet } from 'react-native';
import * as fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  vContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },

  vInfoTop: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  vCompanyLogo: {},

  imgCompanyLogo: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  vJobName: {
    marginLeft: 20,
  },

  tJobName: {
    fontSize: 17,
    fontFamily: fonts.FontQsBold,
    color: '#000',
  },

  tCompanyName: {
    textTransform: 'uppercase',
    color: '#afafaf',
    marginTop: 5,
  },

  vInformation: {
    marginTop: 20,
  },

  tLabel: {
    textTransform: 'uppercase',
    fontFamily: fonts.FontQsBold,
    color: '#000',
  },

  vInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingLeft: 10,
  },

  icInfoItem: {
    marginRight: 5,
    color: '#959595',
  },

  tInfoItemLabel: {
    marginRight: 10,
    fontFamily: fonts.FontQsSemiBold,
  },

  tInfoItemValue: {
    fontFamily: fonts.FontQsRegular,
  },

  vDescription: {
    marginTop: 20,
  },

  vRequirement: {
    marginTop: 20,
  },

  vBenefit: {
    marginTop: 20,
  },

  rhtmlContent: {
    paddingHorizontal: 10,
  },

  vBtnApply: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 30,
  },

  toApplyExpired: {
    backgroundColor: 'gray',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },

  tApplyExpired: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.FontQsSemiBold,
    textTransform: 'uppercase',
  },

  toApplied: {
    backgroundColor: 'purple',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },

  tApplied: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.FontQsSemiBold,
    textTransform: 'uppercase',
  },

  toApplyNow: {
    backgroundColor: '#03A003',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },

  tApplyNow: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.FontQsSemiBold,
    textTransform: 'uppercase',
  },
});
