import { StyleSheet } from 'react-native';
import * as fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  vContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },

  vSearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#afafaf',
    paddingVertical: 4,
  },

  icBack: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1 / 12,
    minWidth: 30,
  },

  ipSearch: {
    marginLeft: 5,
    fontSize: 15,
    flex: 11 / 12,
    fontFamily: fonts.FontQsSemiBold,
  },
});
