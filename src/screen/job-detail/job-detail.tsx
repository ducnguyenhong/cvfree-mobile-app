import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { get } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from 'rn-placeholder';
import { JobInfo } from '../../type/job.type';
import CompanyLogo from '../../assets/common/default-company-logo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getDatatLabel, getSalary } from '../../utils/helper';
import dayjs from 'dayjs';
import RenderHtml from 'react-native-render-html';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './job-detail.styles';
import {
  DataCareer,
  DataGender,
  DataRecruitmentPosition,
  DataFormOfWork,
} from '../../constants/data.job';
import { NoData } from '../../components/no-data';

export const JobDetail: React.FC = () => {
  const route = useRoute();
  const jobId = get(route.params, 'id');
  const [jobInfo, setJobInfo] = useState<JobInfo | undefined | null>(undefined);

  useEffect(() => {
    if (jobId) {
      axios
        .get(`/jobs/${jobId}`)
        .then((response: any) => {
          const { data, error, success } = response.data;
          if (!success || response.status > 400) {
            throw new Error(error.message);
          }

          setJobInfo(data.jobDetail);
        })
        .catch(e => {
          Toast.show({
            type: 'error',
            text1: 'Can not get job info',
            text2: e.message,
          });
        });
    }
  }, [jobId]);

  if (typeof jobInfo === 'undefined') {
    return (
      <View style={styles.vContainer}>
        <Placeholder Animation={Fade} Left={PlaceholderMedia}>
          <PlaceholderLine />
          <PlaceholderLine width={50} />
        </Placeholder>
        <View style={styles.vInformation}>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={30} />
            <PlaceholderLine width={60} />
            <PlaceholderLine width={60} />
            <PlaceholderLine width={60} />
            <PlaceholderLine width={60} />
            <PlaceholderLine width={60} />
            <PlaceholderLine width={60} />
          </Placeholder>
        </View>

        <View style={styles.vInformation}>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={30} />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
          </Placeholder>
        </View>

        <View style={styles.vInformation}>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={30} />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
          </Placeholder>
        </View>

        <View style={styles.vInformation}>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={30} />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
          </Placeholder>
        </View>
      </View>
    );
  }

  if (jobInfo === null) {
    return <NoData />;
  }

  const {
    name,
    address,
    career,
    recruitmentPosition,
    timeToApply,
    formOfWork,
    numberRecruited,
    genderRequirement,
    salary,
    jobDescription,
    requirementForCandidate,
    benefitToEnjoy,
    isApplied,
    company,
  } = jobInfo;

  const ButtonApply = () => {
    if (timeToApply < dayjs().valueOf()) {
      return (
        <TouchableOpacity activeOpacity={0.8} style={styles.toApplyExpired}>
          <Text style={styles.tApplyExpired}>Expired</Text>
        </TouchableOpacity>
      );
    }
    if (isApplied) {
      return (
        <TouchableOpacity activeOpacity={0.8} style={styles.toApplied}>
          <Text style={styles.tApplied}>Applied</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.vBtnApply}>
        <TouchableOpacity activeOpacity={0.8} style={styles.toApplyNow}>
          <Text style={styles.tApplyNow}>Apply now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.vContainer}>
          <View style={styles.vInfoTop}>
            <View style={styles.vCompanyLogo}>
              <Image source={CompanyLogo} style={styles.imgCompanyLogo} />
            </View>
            <View style={styles.vJobName}>
              <Text numberOfLines={2} style={styles.tJobName}>
                {name}
              </Text>
              <Text style={styles.tCompanyName}>{company?.name}</Text>
            </View>
          </View>

          <View style={styles.vInformation}>
            <Text style={styles.tLabel}>1. Information</Text>
            <View style={styles.vInfoItem}>
              <Icon name="map-marker-alt" style={styles.icInfoItem} />
              <Text style={styles.tInfoItemLabel}>Address:</Text>
              <Text style={styles.tInfoItemValue}>{address?.label}</Text>
            </View>
            <View style={styles.vInfoItem}>
              <Icon name="briefcase" style={styles.icInfoItem} />
              <Text style={styles.tInfoItemLabel}>Career:</Text>
              <Text style={styles.tInfoItemValue}>
                {getDatatLabel(DataCareer, career)}
              </Text>
            </View>
            <View style={styles.vInfoItem}>
              <Icon name="briefcase" style={styles.icInfoItem} />
              <Text style={styles.tInfoItemLabel}>Recruitment position:</Text>
              <Text style={styles.tInfoItemValue}>
                {getDatatLabel(DataRecruitmentPosition, recruitmentPosition)}
              </Text>
            </View>
            <View style={styles.vInfoItem}>
              <Icon name="briefcase" style={styles.icInfoItem} />
              <Text style={styles.tInfoItemLabel}>Form of work:</Text>
              <Text style={styles.tInfoItemValue}>
                {getDatatLabel(DataFormOfWork, formOfWork)}
              </Text>
            </View>
            <View style={styles.vInfoItem}>
              <Icon name="briefcase" style={styles.icInfoItem} />
              <Text style={styles.tInfoItemLabel}>Number recruited:</Text>
              <Text style={styles.tInfoItemValue}>{numberRecruited}</Text>
            </View>
            <View style={styles.vInfoItem}>
              <Icon name="briefcase" style={styles.icInfoItem} />
              <Text style={styles.tInfoItemLabel}>Gender requirement:</Text>
              <Text style={styles.tInfoItemValue}>
                {getDatatLabel(DataGender, genderRequirement)}
              </Text>
            </View>
            <View style={styles.vInfoItem}>
              <Icon name="coins" style={styles.icInfoItem} />
              <Text style={styles.tInfoItemLabel}>Salary:</Text>
              <Text style={styles.tInfoItemValue}>{getSalary(salary)}</Text>
            </View>
            <View style={styles.vInfoItem}>
              <Icon name="map-marker-alt" style={styles.icInfoItem} />
              <Text style={styles.tInfoItemLabel}>Recruitment deadline:</Text>
              <Text style={styles.tInfoItemValue}>
                {dayjs(timeToApply).format('DD/MM/YYYY')}
              </Text>
            </View>
          </View>

          <View style={styles.vDescription}>
            <Text style={styles.tLabel}>2. Description</Text>
            <RenderHtml
              baseStyle={styles.rhtmlContent}
              source={{ html: jobDescription }}
              contentWidth={Dimensions.get('screen').width}
            />
          </View>

          <View style={styles.vRequirement}>
            <Text style={styles.tLabel}>3. Requirement for candidate</Text>
            <RenderHtml
              baseStyle={styles.rhtmlContent}
              source={{ html: requirementForCandidate }}
              contentWidth={Dimensions.get('screen').width}
            />
          </View>

          <View style={styles.vBenefit}>
            <Text style={styles.tLabel}>4. Benefit to enjoy</Text>
            <RenderHtml
              baseStyle={styles.rhtmlContent}
              source={{ html: benefitToEnjoy }}
              contentWidth={Dimensions.get('screen').width}
            />
          </View>

          <View style={styles.vBtnApply}>
            <ButtonApply />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
