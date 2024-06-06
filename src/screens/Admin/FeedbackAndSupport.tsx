import {ImageBackground, ScrollView, Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import ChatSupport1 from '../../components/molecules/ChatSupport1';
import Reviews from '../../components/molecules/Reviews';
import ViewAllMsg from '../../components/molecules/ViewAllMsg';
import Loading from '../Loading';
import {useQuery} from '@tanstack/react-query';
import {Feedback} from './AdminMain';
import axios from 'axios';
import TextRegular from '../../components/atoms/Text/TextRegular';

const BackgroundImage = require('../../assets/images/admin-content-bg.png');

const FeedbackAndSupport = () => {
  //   const height = useBottomTabBarHeight();

  const {data: reviewsFeedback, isLoading: isLoadingReviews} = useQuery<
    Feedback[]
  >({
    queryKey: ['reviewsFeedback'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/admin/all-feedbacks',
      );
      return data;
    },
  });

  if (isLoadingReviews) {
    return <Loading bgImage={BackgroundImage} />;
  }

  return (
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <StatusBarAdmin text=" Feedback & Support" />
      <Box height={'$6'} />
      <ScrollView showsVerticalScrollIndicator={false} paddingHorizontal={'$4'}>
        <VStack space="sm">
          <TextSemibold text="Reviews" fontSize={'$2xl'} />
          {Array.isArray(reviewsFeedback) && reviewsFeedback.length === 0 && (
            <TextRegular text="No reviews found." fontSize={'$lg'} />
          )}

          {reviewsFeedback?.map((review: any, index: any) => (
            <Reviews key={index} feedbacks={review} />
          ))}
        </VStack>
        <Box height={'$6'} />
        {/* <VStack space="sm">
          <TextSemibold text=" Chat Support" fontSize={'$xl'} />
          {Array.from({length: 1}).map((_, index) => (
            <ChatSupport1 key={index} />
          ))}
        </VStack> */}
        <Box height={'$6'} />
        <VStack space="lg">
          {/* {Array.from({length: 1}).map((_, index) => (
            <ChatSupport2 key={index} />
          ))} */}
          {/* <ViewAllMsg /> */}
        </VStack>
      </ScrollView>
    </ImageBackground>
  );
};

export default FeedbackAndSupport;
