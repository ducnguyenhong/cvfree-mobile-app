import { StyleSheet } from 'react-native';
import * as fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    paddingBottom: 10,
    paddingHorizontal: 15,
    paddingTop: 100,
  },

  // loading

  vLoading: {
    marginTop: 100,
    paddingHorizontal: 15,
  },

  vLdStatis: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  vLdItemStatis: {
    flex: 1 / 3,
  },

  vLdJobs: {
    marginTop: 30,
  },

  vLdItemJob: {
    width: 230,
    marginRight: 20,
  },

  vLdItemJobLine: {
    width: '100%',
  },

  flLdJob: {
    paddingHorizontal: 10,
  },

  vNoData: {
    marginTop: 100,
    paddingHorizontal: 10,
  },

  // toolbar

  imgHeaderBackground: {
    width: '100%',
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 40,
  },

  vToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#C9C9C9',
    paddingBottom: 15,
    paddingHorizontal: 15,
  },

  vToolbarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imgToolbarAvatar: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },

  vToolbarInfo: {
    marginLeft: 10,
  },

  tToolbarHello: {
    color: '#F2F2F2',
  },

  tToolbarFullname: {
    textTransform: 'uppercase',
    fontFamily: fonts.FontQsBold,
    color: '#fff',
  },

  vToolbarRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },

  vToolbarIcon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginLeft: 15,
    borderRadius: 50,
  },

  icToolbarIcon: {
    color: 'green',
  },

  // common

  vLabel: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  tLabel: {
    borderLeftWidth: 4,
    borderColor: '#00A700',
    paddingVertical: 2,
    paddingHorizontal: 10,
    textTransform: 'uppercase',
    fontFamily: fonts.FontQsSemiBold,
    color: '#000',
  },

  tSeeAll: {
    color: '#00A700',
    textDecorationLine: 'underline',
  },

  vStatisData: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  vStatisCvItem: {
    flex: 1 / 3,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  vStatisCompanyItem: {
    flex: 1 / 3,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  vStatisJobItem: {
    flex: 1 / 3,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  icStatisItemCv: {
    fontSize: 25,
    color: '#6AAD31',
  },

  icStatisItemCompany: {
    fontSize: 25,
    color: '#A039A0',
  },

  icStatisItemJob: {
    fontSize: 25,
    color: '#3986C1',
  },

  vStatisItemContent: {
    marginLeft: 10,
  },

  tStatisLabel: {
    textTransform: 'uppercase',
    fontSize: 11,
  },

  tStatisValue: {
    fontSize: 17,
    color: 'red',
    fontFamily: fonts.FontQsSemiBold,
  },

  // jobs

  vJobs: {
    marginBottom: 20,
  },

  flContentJob: {
    padding: 10,
  },

  vJobItem: {},

  toJobItem: {
    marginRight: 20,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#F0F0F0',
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

  vJobItemTop: {
    flexDirection: 'row',
  },

  imgJobLogo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  vJobInfo: {
    marginLeft: 10,
  },

  tJobName: {
    color: '#000',
    fontFamily: fonts.FontQsSemiBold,
    fontSize: 15,
  },

  tJobCompanyName: {
    textTransform: 'uppercase',
    fontSize: 13,
    marginTop: 3,
    color: '#afafaf',
  },

  vJobItemBottom: {
    marginTop: 10,
  },

  vJobInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icJobInfoRow: {
    marginRight: 5,
  },

  tJobInfoLabelRow: {
    marginRight: 10,
  },

  tJobInfValueRow: {},

  // cv

  vCvItem: {
    flexDirection: 'row',
    marginRight: 20,
    padding: 10,
    borderRadius: 5,

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

  flContentCv: {
    padding: 10,
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

  vCvFullname: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tCvFullname: {
    textTransform: 'uppercase',
    fontFamily: fonts.FontQsSemiBold,
    fontSize: 16,
    color: '#000',
    marginRight: 5,
  },

  icCvGender: {
    marginLeft: 5,
  },

  vCvBirthday: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },

  icCvBirthday: {
    color: '#39E039',
  },

  tCvBirthday: {
    marginLeft: 5,
  },

  vCvAddress: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },

  icCvAddress: {
    color: '#39E039',
  },

  tCvAddress: {
    marginLeft: 5,
  },

  vCvCareer: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },

  icCvCareer: {
    color: '#39E039',
  },

  tCvCareer: {
    marginLeft: 5,
  },

  // company

  vCompanies: {
    marginTop: 20,
  },

  flContentCompany: {
    padding: 10,
  },

  vCompanyItem: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    marginRight: 20,

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

  vCompanyLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgCompanyLogo: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  vCompanyContent: {
    marginLeft: 20,
  },

  tCompanyName: {
    textTransform: 'uppercase',
    color: '#000',
    fontSize: 16,
    fontFamily: fonts.FontQsSemiBold,
  },

  vCompanyInfo: {
    marginTop: 5,
  },

  vCompanyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },

  icCompanyRow: {
    marginRight: 5,
  },

  tCompanyRowValue: {},
});
