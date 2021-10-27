import React from 'react';
import { ImageBackground, StatusBar, Text, View } from 'react-native';
import { headerStyles } from './tab-home.styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import ImgHeaderBackground from '../../assets/common/img_header_background.png';
import { useNavigation } from '@react-navigation/native';

interface HeaderCommonProps extends BottomTabHeaderProps {
  backButton?: boolean;
  title?: string;
}

export const HeaderCommon: React.FC<HeaderCommonProps> = props => {
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
            <Text style={headerStyles.tTitle}>{title || route.name}</Text>
          </View>
          <View style={headerStyles.vHeaderRight} />
        </View>
      </ImageBackground>
    </View>
  );
};
