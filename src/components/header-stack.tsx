import React from 'react';
import { ImageBackground, StatusBar, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImgHeaderBackground from '../assets/common/img_header_background.png';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import * as fonts from '../constants/fonts';
import { StackHeaderProps } from '@react-navigation/stack';

interface HeaderStackProps extends StackHeaderProps {
  backButton?: boolean;
  title?: string;
}

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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
  },

  vHeaderLeft: {
    position: 'absolute',
    top: 20,
    left: 10,
  },

  icBack: {
    paddingLeft: 20,
  },

  vHeaderCenter: {
    alignItems: 'center',
  },

  tTitle: {
    color: '#fff',
    fontFamily: fonts.FontQsBold,
    fontSize: 17,
    padding: 15,
  },

  vHeaderRight: {},
});

export const HeaderStack: React.FC<HeaderStackProps> = props => {
  const { route, backButton, title } = props;
  const navigation = useNavigation<any>();

  return (
    <View style={headerStyles.vHeader}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        resizeMode="cover"
        source={ImgHeaderBackground}
        style={headerStyles.imgHeader}>
        <View style={headerStyles.vHeaderContent}>
          <View style={headerStyles.vHeaderLeft}>
            {backButton && (
              <Icon
                name="chevron-left"
                color="#fff"
                style={headerStyles.icBack}
                size={16}
                onPress={() => navigation.goBack()}
              />
            )}
          </View>
          <View style={headerStyles.vHeaderCenter}>
            <Text style={headerStyles.tTitle} numberOfLines={1}>
              {title || route.name}
            </Text>
          </View>
          <View style={headerStyles.vHeaderRight} />
        </View>
      </ImageBackground>
    </View>
  );
};
