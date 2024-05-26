import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import ChatSupport1 from '../../components/molecules/ChatSupport1';
import ChatSupport2 from '../../components/molecules/ChatSupport2';
import Reviews from '../../components/molecules/Reviews';

const BackgroundImage = require('../../assets/images/admin-content-bg.png');

const FeedbackAndSupport = () => {
  //   const height = useBottomTabBarHeight();
  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <StatusBarAdmin text=" Feedback & Support" />
      <Box height={'$6'} />
      <ScrollView showsVerticalScrollIndicator={false} paddingHorizontal={'$4'}>
        <VStack space="sm">
          <TextSemibold text=" Reviews" fontSize={'$xl'} />
          {Array.from({length: 2}).map((_, index) => (
            <Reviews key={index} />
          ))}
        </VStack>
        <Box height={'$6'} />
        <VStack space="sm">
          <TextSemibold text=" Chat Support" fontSize={'$xl'} />
          {Array.from({length: 1}).map((_, index) => (
            <ChatSupport1 key={index} />
          ))}
        </VStack>
        <Box height={'$6'} />
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
