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
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
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

  vRowOption: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 60,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#DBDBDB',
  },

  vRowOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vTextOption: {
    marginLeft: 20,
  },

  tOptionName: {
    fontFamily: fonts.FontQsBold,
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
});
