import axios from 'axios';
import { get } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from 'rn-placeholder';
import { CvInfo } from '../../../type/cv.type';
import { styles } from './admin-cv.styles';
import DefaultAvatar from '../../../assets/common/default-avatar.jpg';

export const Cvs: React.FC = () => {
  const [cvs, setCvs] = useState<CvInfo[] | undefined | null>(undefined);

  const callApiGetCvs = useCallback(() => {
    axios
      .get('/cvs', {
        params: {
          page: 1,
          size: 10,
        },
      })
      .then(response => {
        const { data, error, success } = response.data;
        console.log('ducnh4', response);

        if (!success || response.status > 400) {
          throw new Error(get(error, 'message') || 'Can not fetch cvs');
        }
        const { items } = data;
        setCvs(items);
      })
      .catch(e => console.log(e.message));
  }, []);

  useEffect(() => {
    callApiGetCvs();
  }, [callApiGetCvs]);

  if (typeof cvs === 'undefined') {
    return (
      <View style={styles.vLoading}>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}>
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </View>
    );
  }

  if (cvs === null || !cvs.length) {
    return (
      <View style={styles.vNoData}>
        <Text>No cv</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cvs}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => {
          const { detail, career } = item;
          const { fullname, gender, birthday, address, phone } = detail;
          return (
            <View style={styles.vCvItem}>
              <View style={styles.vCvAvatar}>
                <Image
                  // style={styles.imgJobLogo}
                  source={DefaultAvatar}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.vCvContent}>
                <Text style={styles.tFullName} numberOfLines={1}>
                  {fullname}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
