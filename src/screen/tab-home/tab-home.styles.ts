import { StyleSheet } from 'react-native';
import * as fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  vButtonCreate: {
    backgroundColor: '#FE387D',
    borderRadius: 100,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icCreate: {
    color: '#fff',
    fontSize: 18,
  },
});

export const headerStyles = StyleSheet.create({
  vHeader: {},

  imgHeader: {
    height: 80,
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  vHeaderContent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  vHeaderLeft: {
    flex: 1 / 3,
  },

  icBack: {
    paddingLeft: 20,
  },

  vHeaderCenter: {
    flex: 1 / 3,
    alignItems: 'center',
  },

  tTitle: {
    color: '#fff',
    fontFamily: fonts.FontQsBold,
    fontSize: 17,
    padding: 15,
  },

  vHeaderRight: {
    flex: 1 / 3,
  },
});
