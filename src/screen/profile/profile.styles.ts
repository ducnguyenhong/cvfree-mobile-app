import { StyleSheet } from 'react-native';
import * as fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  savContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },

  vContainer: {
    paddingHorizontal: 20,
  },

  vTopInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgAvatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  tFullname: {
    marginTop: 10,
    fontSize: 17,
    fontFamily: fonts.FontQsSemiBold,
    textTransform: 'uppercase',
  },

  tUsername: {
    marginTop: 5,
    color: '#afafaf',
  },

  toEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#006AFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },

  icEdit: {
    color: '#fff',
    marginRight: 5,
    fontSize: 15,
  },

  tEdit: {
    color: '#fff',
    fontSize: 15,
    fontFamily: fonts.FontQsSemiBold,
  },

  vBottomInfo: {
    marginTop: 40,
  },

  vGroupInfo: {
    marginBottom: 10,
  },

  vSection: {
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderRadius: 5,
  },

  tSection: {
    textTransform: 'uppercase',
    fontFamily: fonts.FontQsSemiBold,
    letterSpacing: 1,
    color: '#9D9D9D',
  },

  vContentInfo: {
    paddingHorizontal: 20,
  },

  vItemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },

  vItemInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icItemInfo: {
    marginRight: 10,
    fontSize: 15,
  },

  tLabelInfo: {
    fontFamily: fonts.FontQsSemiBold,
    fontSize: 15,
  },

  tValueInfo: {
    fontSize: 15,
    color: '#ADADAD',
  },
});
