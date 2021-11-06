import { StyleSheet } from 'react-native';
import * as fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  vContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    paddingVertical: 30,
  },

  tErrorInput: {
    color: '#ED1C1C',
  },

  tLabelInput: {
    marginBottom: 3,
    fontSize: 15,
    fontFamily: fonts.FontQsSemiBold,
    color: '#000',
  },

  ipElement: {
    borderRadius: 8,
    paddingRight: 20,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    paddingLeft: 40,
    height: 50,
    fontFamily: fonts.FontQsMedium,
  },

  ipElementDate: {
    borderRadius: 8,
    paddingRight: 20,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    paddingLeft: 40,
    height: 50,
    fontFamily: fonts.FontQsMedium,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  vItemInput: {
    marginBottom: 10,
  },

  vRowInputAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  vInputAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
  },

  toInputAvatar: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#afafaf',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  icInputAvatar: {
    fontSize: 30,
    color: '#939393',
  },

  toClearAvatar: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 25,
    height: 25,
    backgroundColor: '#F52929',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },

  dpGender: {
    borderColor: '#D1D1D1',
    borderWidth: 1,
  },

  icClearAvatar: {
    color: '#fff',
    fontSize: 18,
  },

  imgInputAvatar: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  vInputElement: {},

  icInput: {
    position: 'absolute',
    top: 18,
    left: 15,
    fontSize: 15,
  },

  vBtnUpdate: {
    marginTop: 20,
    paddingBottom: 80,
  },

  toBtnUpdate: {
    backgroundColor: '#4646EA',
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tBtnUpdate: {
    color: '#fff',
    fontFamily: fonts.FontQsBold,
    fontSize: 16,
  },

  mdGoSetting: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },

  vGSIconClose: {
    alignItems: 'flex-end',
  },

  icGSClose: {
    fontSize: 20,
  },

  vGSContent: {
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 10,
  },

  tGSContent: {
    fontSize: 15,
  },

  toGSSetting: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  tGSSetting: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: '#fff',
  },
});
