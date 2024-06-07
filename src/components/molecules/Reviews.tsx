import {HStack, Image, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextRegular from '../atoms/Text/TextRegular';

const StarFilled = require('../../assets/images/icons/star.png');
const UserIcon = require('../../assets/images/icons/user.png');

interface Feedback {
  feedback_id: string;
  user_name: string;
  feedback: string;
}

interface ReviewsProps {
  feedbacks: Feedback[];
}

const Reviews: React.FC<ReviewsProps> = ({feedbacks}) => {
  if (feedbacks.length === 0) {
    return null;
  }
  return (
    <View>
      {feedbacks?.map(feedback => (
        <VStack
          key={feedback?.feedback_id}
          bg="#D7E6ED"
          w="$full"
          h="$16"
          borderColor="gray"
          borderWidth={0.5}
          rounded={'$2xl'}
          hardShadow="4"
          mb="$4"
          p="$4">
          <HStack alignItems="center" space="lg" justifyContent="space-between">
            <HStack alignItems="center" space="md">
              <Image source={UserIcon} alt="User Icon" width={20} height={20} />
              <TextRegular
                text={feedback?.user_name || 'Anonymous'}
                fontSize={'$xl'}
              />
            </HStack>
            <HStack
              justifyContent="space-between"
              alignItems="baseline"
              h="$4/6">
              {Array.from({length: parseInt(feedback.feedback)}, (_, index) => (
                <Image
                  key={index}
                  source={StarFilled}
                  w={'$5'}
                  h={'$5'}
                  alt="Star Icon"
                />
              ))}
            </HStack>
          </HStack>
        </VStack>
      ))}
    </View>
  );
};

export default Reviews;
