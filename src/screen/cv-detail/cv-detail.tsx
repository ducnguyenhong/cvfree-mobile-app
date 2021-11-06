import React from 'react';
import { WebView } from 'react-native-webview';
import { CLIENT_URL } from '../../constants/url';
import { slugURL } from 'galaxy-utility';
import { useRoute } from '@react-navigation/native';

export const CvDetail: React.FC = () => {
  const route = useRoute<any>();
  const { id, fullname } = route.params;

  return (
    <WebView
      source={{
        uri: `${CLIENT_URL}/cv-public/${slugURL(fullname)}.${id}`,
      }}
      javaScriptEnabled
    />
  );
};
