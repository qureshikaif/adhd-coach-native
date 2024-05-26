import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import RecentFeedbacks from '../../components/molecules/RecentFeedbacks';
// import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
// import ChatSupport from '../../components/molecules/ChatSupport1';
import ChatSupport1 from '../../components/molecules/ChatSupport1';
import ChatSupport2 from '../../components/molecules/ChatSupport2';

const BackgroundImage = require('../../assets/images/admin-content-bg.png');

const FeedbackAndSupport = () => {
//   const height = useBottomTabBarHeight();
  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarAdmin text=" Feedback & Support" />
        <Box height={'$6'} />
        <ScrollView paddingHorizontal={'$3'}></ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="sm">
          <TextSemibold text=" Reviews" fontSize={'$xl'} />
          {Array.from({length: 2}).map((_, index) => (
            <RecentFeedbacks key={index} />
          ))}
        </VStack>
        {/* <Box height={height * 2.5} /> */}
        <Box height={'$6'}/>
        <VStack space="sm">
          <TextSemibold text=" Chat Support" fontSize={'$xl'} />
          {Array.from({length: 1}).map((_, index) => (
            <ChatSupport1 key={index} />
          ))}
        </VStack>
        <Box height={'$6'}/>
        <VStack space="lg">
          {Array.from({length: 1}).map((_, index) => (
            <ChatSupport2 key={index} />
          ))}
        </VStack>
      </ScrollView>
    </ImageBackground>
  );
};

export default FeedbackAndSupport;
