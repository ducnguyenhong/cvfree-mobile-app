import { StyleSheet } from 'react-native';
import * as fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  // loading
  vLoading: {
    paddingHorizontal: 15,
    paddingVertical: 10,
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

  flJobs: {},

  vJobItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  vJobLogo: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgJobLogo: {
    width: 80,
    height: 80,
  },

  vJobContent: {
    marginLeft: 10,
  },

  tJobName: {
    fontSize: 18,
    fontFamily: fonts.FontQsSemiBold,
    color: '#000',
  },

  tCompanyName: {
    textTransform: 'uppercase',
    color: '#AFAFAF',
    marginTop: 5,
  },

  vAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },

  tAddress: {
    marginLeft: 5,
  },

  icAddress: {
    color: '#39E039',
  },

  vSalary: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },

  icSalary: {
    color: '#39E039',
  },

  tSalary: {
    marginLeft: 5,
  },

  vTimeToApply: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icTimeToApply: {
    color: '#39E039',
  },

  tTimeToApply: {
    marginLeft: 5,
  },
});
