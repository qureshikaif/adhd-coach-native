import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import LastWeekStatistics from '../../components/molecules/LastWeekStatistics';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

const AppAnalytics = () => {
  const height = useBottomTabBarHeight();
  const {data: studentCount, isLoading: isLoadingStudent} = useQuery({
    queryKey: ['studentCount'],
    queryFn: async () => {
      const {data} = await axios.get(
        'https://adhd-coach-backend.vercel.app/student/get-number',
      );
      return data;
    },
  });
  const {data: teacherCount, isLoading: isLoadingTeacher} = useQuery({
    queryKey: ['teacherCount'],
    queryFn: async () => {
      const {data} = await axios.get(
        'https://adhd-coach-backend.vercel.app/teacher/get-number',
      );
      return data;
    },
  });

  if (isLoadingTeacher || isLoadingStudent) {
    return <Loading bgImage={BackgroundImage} />;
  }

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarAdmin text="App Analytics" />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <VStack space="lg">
            <LastWeekStatistics
              studentCount={studentCount}
              teacherCount={teacherCount}
            />
          </VStack>
          <Box height={height * 2} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AppAnalytics;
