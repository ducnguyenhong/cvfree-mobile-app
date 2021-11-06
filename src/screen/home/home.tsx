import axios from 'axios';
import { get } from 'lodash';
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
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
import { useSelector } from 'react-redux';
import { getUserInfo, getUserToken } from '../../redux/selector/auth-selector';
import ImgHeaderBackground from '../../assets/common/img_header_background.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const HeaderHome: React.FC = memo(() => {
  const navigation = useNavigation<any>();
  const userInfo = useSelector(getUserInfo);
  const { t } = useTranslation();

  return (
    <Fragment>
      <StatusBar backgroundColor="transparent" translucent />
      <ImageBackground
        source={ImgHeaderBackground}
        style={styles.imgHeaderBackground}
        resizeMode="cover">
        <View style={styles.vToolbar}>
          <View
            style={styles.vToolbarLeft}
            onTouchStart={() => navigation.navigate('ProfileScreen')}>
            <Image source={DefaultAvatar} style={styles.imgToolbarAvatar} />
            <View style={styles.vToolbarInfo}>
              <Text style={styles.tToolbarHello}>{t('HOME:HELLO')}</Text>
              <Text style={styles.tToolbarFullname}>{userInfo.fullname}</Text>
            </View>
          </View>
          <View style={styles.vToolbarRight}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('SearchScreen')}>
              <View style={styles.vToolbarIcon}>
                <Icon name="search" style={styles.icToolbarIcon} />
              </View>
            </TouchableOpacity>

            <View style={styles.vToolbarIcon}>
              <Icon name="bell" style={styles.icToolbarIcon} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Fragment>
  );
});

export const HomeScreen: React.FC = () => {
  const [data, setData] = useState<DashboardInfo | undefined | null>(undefined);
  const navigation = useNavigation<any>();
  const { t } = useTranslation();
  const token = useSelector(getUserToken);

  const callApiDashboard = useCallback(() => {
    if (token) {
      axios
        .get('/dashboard')
        .then(response => {
          const { data: dataRes, error, success } = response.data;

          if (!success || response.status > 400) {
            throw new Error(get(error, 'message') || 'Can not fetch dashboard');
          }
          const { dataDashboard } = dataRes;
          setData(dataDashboard);
        })
        .catch(e => console.log(e.message));
    }
  }, [token]);

  useEffect(() => {
    callApiDashboard();
  }, [callApiDashboard]);

  if (typeof data === 'undefined') {
    return (
      <SafeAreaView>
        <HeaderHome />
        <View style={styles.vLoading}>
          <View>
            <View style={styles.vLabel}>
              <Text style={styles.tLabel}>{t('HOME:STATISTICS')}</Text>
            </View>
            <View style={styles.vLdStatis}>
              <View style={styles.vLdItemStatis}>
                <Placeholder Animation={Fade} Left={PlaceholderMedia}>
                  <PlaceholderLine width={40} />
                </Placeholder>
              </View>
              <View style={styles.vLdItemStatis}>
                <Placeholder Animation={Fade} Left={PlaceholderMedia}>
                  <PlaceholderLine width={40} />
                </Placeholder>
              </View>
              <View style={styles.vLdItemStatis}>
                <Placeholder Animation={Fade} Left={PlaceholderMedia}>
                  <PlaceholderLine width={40} />
                </Placeholder>
              </View>
            </View>
          </View>

          <View style={styles.vLdJobs}>
            <View style={styles.vLabel}>
              <Text style={styles.tLabel}>{t('HOME:JOBS')}</Text>
            </View>
            <View>
              <FlatList
                data={[1, 2]}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.flLdJob}
                keyExtractor={item => `${item}`}
                renderItem={() => {
                  return (
                    <View style={styles.vLdItemJob}>
                      <Placeholder Animation={Fade}>
                        <Placeholder Left={PlaceholderMedia}>
                          <PlaceholderLine width={80} />
                          <PlaceholderLine width={80} />
                        </Placeholder>
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                      </Placeholder>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <View style={styles.vLdJobs}>
            <View style={styles.vLabel}>
              <Text style={styles.tLabel}>{t('HOME:CVS')}</Text>
            </View>
            <View>
              <FlatList
                data={[1, 2]}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.flLdJob}
                keyExtractor={item => `${item}`}
                renderItem={() => {
                  return (
                    <View style={styles.vLdItemJob}>
                      <Placeholder Animation={Fade} Left={PlaceholderMedia}>
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                      </Placeholder>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <View style={styles.vLdJobs}>
            <View style={styles.vLabel}>
              <Text style={styles.tLabel}>{t('HOME:COMPANIES')}</Text>
            </View>
            <View>
              <FlatList
                data={[1, 2]}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.flLdJob}
                keyExtractor={item => `${item}`}
                renderItem={() => {
                  return (
                    <View style={styles.vLdItemJob}>
                      <Placeholder Animation={Fade} Left={PlaceholderMedia}>
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                        <PlaceholderLine style={styles.vLdItemJobLine} />
                      </Placeholder>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  if (data === null) {
    return (
      <SafeAreaView>
        <HeaderHome />
        <View style={styles.vNoData}>
          <Text>No data</Text>
        </View>
      </SafeAreaView>
    );
  }

  const { statis, jobs, companies, cvs } = data;

  return (
    <SafeAreaView>
      <HeaderHome />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.container}>
            <View>
              {/* Thống kê */}
              <View>
                <View style={styles.vLabel}>
                  <Text style={styles.tLabel}>{t('HOME:STATISTICS')}</Text>
                </View>
                <View style={styles.vStatisData}>
                  <View style={styles.vStatisCvItem}>
                    <Icon name="paste" style={styles.icStatisItemCv} />
                    <View style={styles.vStatisItemContent}>
                      <Text style={styles.tStatisValue}>{statis.cv}</Text>
                      <Text style={styles.tStatisLabel}>{t('HOME:CVS')}</Text>
                    </View>
                  </View>
                  <View style={styles.vStatisJobItem}>
                    <Icon name="briefcase" style={styles.icStatisItemJob} />
                    <View style={styles.vStatisItemContent}>
                      <Text style={styles.tStatisValue}>{statis.job}</Text>
                      <Text style={styles.tStatisLabel}>{t('HOME:JOBS')}</Text>
                    </View>
                  </View>
                  <View style={styles.vStatisCompanyItem}>
                    <Icon name="building" style={styles.icStatisItemCompany} />
                    <View style={styles.vStatisItemContent}>
                      <Text style={styles.tStatisValue}>{statis.company}</Text>
                      <Text style={styles.tStatisLabel}>
                        {t('HOME:COMPANIES')}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Việc làm mới*/}
              <View style={styles.vJobs}>
                <View style={styles.vLabel}>
                  <Text style={styles.tLabel}>{t('HOME:JOBS')}</Text>
                  <Text
                    style={styles.tSeeAll}
                    onPress={() => navigation.navigate('Job')}>
                    {t('HOME:SEE_ALL')}
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
                      const {
                        name,
                        company,
                        salary,
                        timeToApply,
                        address,
                        _id,
                      } = item;
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('JobDetail', { id: _id })
                          }
                          style={styles.toJobItem}
                          activeOpacity={0.85}>
                          <View style={styles.vJobItem}>
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
                                <Icon
                                  name="coins"
                                  style={styles.icJobInfoRow}
                                />
                                <Text style={styles.tJobInfoLabelRow}>
                                  Salary:
                                </Text>
                                <Text style={styles.tJobInfValueRow}>
                                  {getSalary(salary)}
                                </Text>
                              </View>

                              <View style={styles.vJobInfoRow}>
                                <Icon
                                  name="clock"
                                  style={styles.icJobInfoRow}
                                />
                                <Text style={styles.tJobInfoLabelRow}>
                                  Recruitment deadline:
                                </Text>
                                <Text style={styles.tJobInfValueRow}>
                                  {dayjs(timeToApply).format('DD/MM/YYYY')}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>

              {/* Hồ sơ mới*/}
              <View>
                <View style={styles.vLabel}>
                  <Text style={styles.tLabel}>{t('HOME:CVS')}</Text>
                  <Text
                    style={styles.tSeeAll}
                    onPress={() => navigation.navigate('Cv')}>
                    {t('HOME:SEE_ALL')}
                  </Text>
                </View>
                <View>
                  <FlatList
                    data={cvs}
                    horizontal
                    contentContainerStyle={styles.flContentCv}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => {
                      const { detail, career, _id } = item;
                      const { fullname, gender, birthday, address } = detail;
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('CvDetail', {
                              id: _id,
                              fullname,
                            })
                          }
                          activeOpacity={0.8}
                          style={styles.toCvItem}>
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
                                <Text
                                  style={styles.tCvFullname}
                                  numberOfLines={1}>
                                  {fullname}
                                </Text>
                                <Icon
                                  style={styles.icCvGender}
                                  name={gender === 'MALE' ? 'mars' : 'venus'}
                                  color={
                                    gender === 'MALE' ? '#5858E5' : '#FF647E'
                                  }
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
                                <Icon
                                  name="briefcase"
                                  style={styles.icCvCareer}
                                />
                                <Text style={styles.tCvCareer}>
                                  {career?.label}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>

              {/* Công ty mới*/}
              <View style={styles.vCompanies}>
                <View style={styles.vLabel}>
                  <Text style={styles.tLabel}>{t('HOME:COMPANIES')}</Text>
                  <Text
                    style={styles.tSeeAll}
                    onPress={() => navigation.navigate('Cv')}>
                    {t('HOME:SEE_ALL')}
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
                                <Icon
                                  name="phone"
                                  style={styles.icCompanyRow}
                                />
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
