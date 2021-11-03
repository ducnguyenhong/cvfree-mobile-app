import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageNoData from '../assets/common/no-data.png';
import * as fonts from '../constants/fonts';

const styles = StyleSheet.create({
  vContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingVertical: 30,
  },

  imgNoData: {
    width: 150,
    height: 150,
  },

  tNoData: {
    fontSize: 17,
    fontFamily: fonts.FontQsSemiBold,
  },

  toBack: {
    flexDirection: 'row',
    backgroundColor: '#2C9DCB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },

  icBack: {
    color: '#fff',
    marginRight: 10,
  },

  tBack: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.FontQsSemiBold,
    marginBottom: 2,
  },
});

export const NoData: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.vContainer}>
      <Image source={ImageNoData} style={styles.imgNoData} />
      <Text style={styles.tNoData}>No data</Text>
      <TouchableOpacity
        style={styles.toBack}
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" style={styles.icBack} />
        <Text style={styles.tBack}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
