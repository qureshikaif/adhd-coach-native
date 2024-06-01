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

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

const AppAnalytics = () => {
  const {data: studentCount} = useQuery({
    queryKey: ['studentCount'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/student/get-number',
      );
      return data;
    },
  });
  const {data: teacherCount} = useQuery({
    queryKey: ['teacherCount'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/teacher/get-number',
      );
      return data;
    },
  });
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
          <Box height={useBottomTabBarHeight() * 2} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AppAnalytics;
