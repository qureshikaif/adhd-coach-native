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

const BackgroundImage = require('../../assets/images/admin-bg-main.png');

const AppAnalytics = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarAdmin text="App Analytics" />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <VStack space="lg">
            <LastWeekStatistics />
          </VStack>
          <Box height={useBottomTabBarHeight() * 2} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AppAnalytics;
