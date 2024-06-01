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

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

const AdminMain = () => {
  const {data: count} = useQuery({
    queryKey: ['totalStudentsEnrolled'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/student/get-number',
      );
      return data;
    },
  });
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarAdmin text="Admin Panel" isSettingsVisible />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <VStack space="lg">
            <TextBold text="Dashboard" fontSize={'$2xl'} />
            <AppStatistics />
            <TotalStudentsEnrolled count={count} />
            <RecentFeedbacks />
            <CourseStatistics />
          </VStack>
          <Box height={useBottomTabBarHeight() * 2} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AdminMain;
