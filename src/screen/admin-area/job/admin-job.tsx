import axios from 'axios';
import { get } from 'lodash';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, Image, Text, View, RefreshControl } from 'react-native';
import { JobInfo } from '../../../type/job.type';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import { styles } from './admin-job.styles';
import DefaultJobLogo from '../../../assets/job/job_default.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import dayjs from 'dayjs';
import { getSalary } from '../../../utils/helper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const LoadingItem: React.FC = memo(() => {
  return (
    <Placeholder
      Animation={Fade}
      Left={props => (
        <View style={styles.vLoadingLeftItem}>
          <PlaceholderMedia
            isRound={true}
            style={[styles.pmLoadingLeftItem, props.style]}
          />
        </View>
      )}
      style={styles.pLoadingItem}>
      <PlaceholderLine />
      <PlaceholderLine width={80} />
      <PlaceholderLine width={50} />
      <PlaceholderLine width={50} />
      <PlaceholderLine width={50} />
    </Placeholder>
  );
});

export const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<JobInfo[] | null | undefined>(undefined);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  const callApiGetJobs = useCallback(() => {
    axios
      .get('/jobs', {
        params: {
          page: 1,
          size: 10,
        },
      })
      .then(response => {
        const { data, error, success } = response.data;

        if (!success || response.status > 400) {
          throw new Error(get(error, 'message') || 'Can not fetch jobs');
        }
        const { items } = data;
        setJobs(items);
      })
      .catch(e => console.log(e.message));
  }, []);

  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setJobs(undefined);
      setRefreshing(false);
      callApiGetJobs();
    });
  }, [callApiGetJobs]);

  useEffect(() => {
    callApiGetJobs();
  }, [callApiGetJobs]);

  if (typeof jobs === 'undefined') {
    return (
      <View style={styles.vLoading}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          keyExtractor={item => JSON.stringify(item)}
          renderItem={() => <LoadingItem />}
        />
      </View>
    );
  }

  if (jobs === null || !jobs.length) {
    return (
      <View style={styles.vNoData}>
        <Text>No job</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.flJobs}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => {
          const { name, company, address, salary, timeToApply, _id } = item;
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.vJobItem}
              onPress={() => navigation.navigate('JobDetail', { id: _id })}>
              <View style={styles.vJobLogo}>
                <Image
                  style={styles.imgJobLogo}
                  source={DefaultJobLogo}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.vJobContent}>
                <Text style={styles.tJobName} numberOfLines={1}>
                  {name}
                </Text>
                <Text style={styles.tCompanyName} numberOfLines={1}>
                  {company?.name}
                </Text>
                <View style={styles.vAddress}>
                  <Icon name="map-marker-alt" style={styles.icAddress} />
                  <Text numberOfLines={1} style={styles.tAddress}>
                    {address?.label}
                  </Text>
                </View>
                <View style={styles.vSalary}>
                  <Icon name="coins" style={styles.icSalary} />
                  <Text style={styles.tSalary}>{getSalary(salary)}</Text>
                </View>
                <View style={styles.vTimeToApply}>
                  <Icon name="clock" style={styles.icTimeToApply} />
                  <Text style={styles.tTimeToApply}>
                    {dayjs(timeToApply).format('DD/MM/YYYY')}
                  </Text>
                </View>
                <View />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
