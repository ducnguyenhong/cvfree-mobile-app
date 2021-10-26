import axios from 'axios';
import { get } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  SectionList,
  Text,
  View,
} from 'react-native';
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from 'rn-placeholder';
import { DashboardInfo } from '../../type/dashboard.type';
import { styles } from './home.styles';
import DefaultAvatar from '../../assets/common/default-avatar.jpg';
import DefaultJobLogo from '../../assets/job/job_default.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import dayjs from 'dayjs';
import { getSalary } from '../../utils/helper';
import DefaultCompanyLogo from '../../assets/common/default-company-logo.png';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen: React.FC = () => {
  const [data, setData] = useState<DashboardInfo | undefined | null>(undefined);
  const navigation = useNavigation<any>();

  const callApiDashboard = useCallback(() => {
    axios
      .get('/dashboard', {
        params: {
          page: 1,
          size: 10,
        },
      })
      .then(response => {
        const { data, error, success } = response.data;

        if (!success || response.status > 400) {
          throw new Error(get(error, 'message') || 'Can not fetch dashboard');
        }
        const { dataDashboard } = data;
        setData(dataDashboard);
      })
      .catch(e => console.log(e.message));
  }, []);

  useEffect(() => {
    callApiDashboard();
  }, [callApiDashboard]);

  if (typeof data === 'undefined') {
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

  if (data === null) {
    return (
      <View style={styles.vNoData}>
        <Text>No data</Text>
      </View>
    );
  }

  const { statis, jobs, companies, cvs } = data;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            {/* Thống kê */}
            <View>
              <View style={styles.vLabel}>
                <Text style={styles.tLabel}>Statis</Text>
              </View>
              <View style={styles.vStatisData}>
                <View style={styles.vStatisCvItem}>
                  <Text style={styles.tStatisLabel}>CV</Text>
                  <Text style={styles.tStatisValue}>{statis.cv}</Text>
                </View>
                <View style={styles.vStatisCompanyItem}>
                  <Text style={styles.tStatisLabel}>Company</Text>
                  <Text style={styles.tStatisValue}>{statis.company}</Text>
                </View>
                <View style={styles.vStatisJobItem}>
                  <Text style={styles.tStatisLabel}>Job</Text>
                  <Text style={styles.tStatisValue}>{statis.job}</Text>
                </View>
              </View>
            </View>

            {/* Việc làm mới*/}
            <View style={styles.vJobs}>
              <View style={styles.vLabel}>
                <Text style={styles.tLabel}>Jobs</Text>
                <Text
                  style={styles.tSeeAll}
                  onPress={() => navigation.navigate('Job')}>
                  See all
                </Text>
              </View>
              <View>
                <FlatList
                  data={jobs}
                  horizontal
                  contentContainerStyle={styles.flContentJob}
                  keyExtractor={item => `${item._id}`}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => {
                    const { name, company, salary, timeToApply, address } =
                      item;
                    return (
                      <View style={styles.jobItem}>
                        <View style={styles.vJobItemTop}>
                          <Image
                            source={DefaultJobLogo}
                            style={styles.imgJobLogo}
                          />
                          <View style={styles.vJobInfo}>
                            <Text style={styles.tJobName} numberOfLines={2}>
                              {name}
                            </Text>
                            <Text
                              style={styles.tJobCompanyName}
                              numberOfLines={1}>
                              {company?.name}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.vJobItemBottom}>
                          <View style={styles.vJobInfoRow}>
                            <Icon
                              name="map-marker-alt"
                              style={styles.icJobInfoRow}
                            />
                            <Text style={styles.tJobInfoLabelRow}>
                              Address:
                            </Text>
                            <Text style={styles.tJobInfValueRow}>
                              {address?.label}
                            </Text>
                          </View>

                          <View style={styles.vJobInfoRow}>
                            <Icon name="coins" style={styles.icJobInfoRow} />
                            <Text style={styles.tJobInfoLabelRow}>Salary:</Text>
                            <Text style={styles.tJobInfValueRow}>
                              {getSalary(salary)}
                            </Text>
                          </View>

                          <View style={styles.vJobInfoRow}>
                            <Icon name="clock" style={styles.icJobInfoRow} />
                            <Text style={styles.tJobInfoLabelRow}>
                              Recruitment deadline:
                            </Text>
                            <Text style={styles.tJobInfValueRow}>
                              {dayjs(timeToApply).format('DD/MM/YYYY')}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            </View>

            {/* Hồ sơ mới*/}
            <View>
              <View style={styles.vLabel}>
                <Text style={styles.tLabel}>Cvs</Text>
                <Text style={styles.tSeeAll}>See all</Text>
              </View>
              <View>
                <FlatList
                  data={cvs}
                  horizontal
                  contentContainerStyle={styles.flContentCv}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => `${item.id}`}
                  renderItem={({ item }) => {
                    const { detail, career } = item;
                    const { fullname, gender, birthday, address } = detail;
                    return (
                      <View style={styles.vCvItem}>
                        <View style={styles.vCvAvatar}>
                          <Image
                            style={styles.imgCvAvatar}
                            source={DefaultAvatar}
                            resizeMode="contain"
                          />
                        </View>

                        <View style={styles.vCvContent}>
                          <View style={styles.vCvFullname}>
                            <Text style={styles.tCvFullname} numberOfLines={1}>
                              {fullname}
                            </Text>
                            <Icon
                              style={styles.icCvGender}
                              name={gender === 'MALE' ? 'mars' : 'venus'}
                              color={gender === 'MALE' ? '#5858E5' : '#FF647E'}
                              size={15}
                            />
                          </View>
                          <View style={styles.vCvBirthday}>
                            <Icon
                              name="birthday-cake"
                              style={styles.icCvBirthday}
                            />
                            <Text style={styles.tCvBirthday}>
                              {dayjs(birthday).format('DD/MM/YYYY')}
                            </Text>
                          </View>
                          <View style={styles.vCvAddress}>
                            <Icon
                              style={styles.icCvAddress}
                              name="map-marker-alt"
                            />
                            <Text style={styles.tCvAddress}>
                              {address?.label}
                            </Text>
                          </View>
                          <View style={styles.vCvCareer}>
                            <Icon name="briefcase" style={styles.icCvCareer} />
                            <Text style={styles.tCvCareer}>
                              {career?.label}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            </View>

            {/* Công ty mới*/}
            <View style={styles.vCompanies}>
              <View style={styles.vLabel}>
                <Text style={styles.tLabel}>Companies</Text>
                <Text
                  style={styles.tSeeAll}
                  onPress={() => navigation.navigate('Cv')}>
                  See all
                </Text>
              </View>
              <View>
                <FlatList
                  horizontal
                  data={companies}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.flContentCompany}
                  keyExtractor={item => `${item._id}`}
                  renderItem={({ item }) => {
                    const { name, phone, website, address } = item;
                    return (
                      <View style={styles.vCompanyItem}>
                        <View style={styles.vCompanyLogo}>
                          <Image
                            source={DefaultCompanyLogo}
                            resizeMode="contain"
                            style={styles.imgCompanyLogo}
                          />
                        </View>
                        <View style={styles.vCompanyContent}>
                          <Text style={styles.tCompanyName}>{name}</Text>
                          <View style={styles.vCompanyInfo}>
                            {website && (
                              <View style={styles.vCompanyRow}>
                                <Icon
                                  name="globe-americas"
                                  style={styles.icCompanyRow}
                                />
                                <Text style={styles.tCompanyRowValue}>
                                  {website}
                                </Text>
                              </View>
                            )}
                            <View style={styles.vCompanyRow}>
                              <Icon name="phone" style={styles.icCompanyRow} />
                              <Text style={styles.tCompanyRowValue}>
                                {phone}
                              </Text>
                            </View>
                            <View style={styles.vCompanyRow}>
                              <Icon
                                name="map-marker-alt"
                                style={styles.icCompanyRow}
                              />
                              <Text style={styles.tCompanyRowValue}>
                                {address.label}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
