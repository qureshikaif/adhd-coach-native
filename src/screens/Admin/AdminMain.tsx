import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import TextBold from '../../components/atoms/Text/TextBold';
import AppStatistics from '../../components/molecules/AppStatistics';
import RecentFeedbacks from '../../components/molecules/RecentFeedbacks';
import CourseStatistics, {
  CourseStatisticsType,
} from '../../components/molecules/CourseStatistics';
import TotalStudentsEnrolled from '../../components/molecules/TotalStudentsEnrolled';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import TextRegular from '../../components/atoms/Text/TextRegular';

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

export interface Feedback {
  feedback_id: number;
  feedback: string;
  role: string;
  user_name: string | null;
}

const AdminMain = () => {
  const height = useBottomTabBarHeight();
  const {data: count, isLoading: isLoadingCount} = useQuery({
    queryKey: ['totalStudentsEnrolledAdmin'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.27.143:8080/student/get-number',
      );
      return data;
    },
  });

  const {data: reviews, isLoading: isLoadingReviews} = useQuery<Feedback[]>({
    queryKey: ['homeReviews'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.27.143:8080/admin/all-feedbacks',
      );
      return data;
    },
  });

  const {data: studentCount, isLoading: isLoadingStudentCount} = useQuery({
    queryKey: ['studentCountCoursesAdmin'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/admin/course-student',
      );
      return data.data;
    },
  });

  if (isLoadingCount || isLoadingReviews) {
    return <Loading bgImage={BackgroundImage} />;
  }
  console.log(studentCount);

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarAdmin text="Admin Panel" isSettingsVisible />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$8'} />
          <VStack space="lg">
            <TextBold text="Dashboard" fontSize={'$2xl'} />
            <AppStatistics />
            <TotalStudentsEnrolled count={count} />
            <RecentFeedbacks feedbacks={reviews as Feedback[]} />
            {studentCount ? (
              <CourseStatistics
                courses={studentCount as CourseStatisticsType[]}
              />
            ) : (
              <TextRegular text="No courses found" fontSize={'$xl'} />
            )}
          </VStack>
          <Box height={height * 2} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AdminMain;
