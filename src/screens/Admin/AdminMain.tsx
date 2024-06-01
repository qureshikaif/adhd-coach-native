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
import CourseStatistics from '../../components/molecules/CourseStatistics';
import TotalStudentsEnrolled from '../../components/molecules/TotalStudentsEnrolled';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

const AdminMain = () => {
  const height = useBottomTabBarHeight();
  const {data: count, isLoading} = useQuery({
    queryKey: ['totalStudentsEnrolled'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/student/get-number',
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loading bgImage={BackgroundImage} />;
  }

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
            <RecentFeedbacks />
            <CourseStatistics />
          </VStack>
          <Box height={height * 2} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AdminMain;
