// RecentFeedbacks.tsx
import React from 'react';
import {HStack, Image, View, VStack} from '@gluestack-ui/themed';
import TextRegular from '../atoms/Text/TextRegular';
import TextSemibold from '../atoms/Text/TextSemibold';
import {Feedback} from '../../screens/Admin/AdminMain';

const StarFilled = require('../../assets/images/icons/star.png');

interface RecentFeedbacksProps {
  feedbacks: Feedback[];
}

const RecentFeedbacks: React.FC<RecentFeedbacksProps> = ({feedbacks}) => {
  if (feedbacks.length === 0) {
    return null;
  }
  return (
    <View>
      <TextSemibold text="Recent Feedbacks" fontSize={'$xl'} pb={'$2'} />
      {feedbacks.map(feedback => (
        <VStack
          key={feedback.feedback_id}
          bg="#D7E6ED"
          w="$full"
          h="$40"
          borderColor="gray"
          rounded={'$lg'}
          hardShadow="4"
          p="$4"
          mb="$4">
          <TextRegular
            text={feedback.user_name || 'Anonymous'}
            fontSize={'$xl'}
          />
          <VStack alignItems="center" justifyContent="center">
            <HStack alignItems="baseline" h="$4/6">
              {Array.from({length: parseInt(feedback.feedback)}, (_, index) => (
                <Image
                  key={index}
                  source={StarFilled}
                  w={'$8'}
                  h={'$8'}
                  alt="Star Icon"
                />
              ))}
            </HStack>
          </VStack>
        </VStack>
      ))}
    </View>
  );
};

export default RecentFeedbacks;
