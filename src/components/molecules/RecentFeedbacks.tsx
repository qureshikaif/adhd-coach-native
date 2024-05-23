import {View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import TextRegular from '../atoms/Text/TextRegular';

const RecentFeedbacks = () => {
  return (
    <View>
      <TextSemibold text="Recent Feedbacks" fontSize={'$xl'} pb={'$2'} />
      <VStack
        bg="#D7E6ED"
        w="$full"
        h="$48"
        rounded={'$lg'}
        hardShadow="4"
        p="$4">
        <TextRegular text="Kaif Qureshi" fontSize={'$xl'} />
      </VStack>
    </View>
  );
};

export default RecentFeedbacks;
