import {HStack, Image, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
// import TextSemibold from '../atoms/Text/TextSemibold';
import TextRegular from '../atoms/Text/TextRegular';
import TextSemibold from '../atoms/Text/TextSemibold';

const StarFilled = require('../../assets/images/icons/star.png');

const RecentFeedbacks = () => {
  return (
    <View>
      <TextSemibold text="Recent Feedbacks" fontSize={'$xl'} pb={'$2'} />
      <VStack
        bg="#D7E6ED"
        w="$full"
        h="$40"
        borderColor="gray"
        rounded={'$lg'}
        hardShadow="4"
        p="$4">
        <TextRegular text="Kaif Qureshi" fontSize={'$xl'} />
        <VStack alignItems="center" justifyContent="center">
          <HStack alignItems="baseline" h="$4/6">
            <Image source={StarFilled} w={'$8'} h={'$8'} alt="Star Icon" />
            <Image source={StarFilled} w={'$8'} h={'$8'} alt="Star Icon" />
            <Image source={StarFilled} w={'$8'} h={'$8'} alt="Star Icon" />
            <Image source={StarFilled} w={'$8'} h={'$8'} alt="Star Icon" />
            <Image source={StarFilled} w={'$8'} h={'$8'} alt="Star Icon" />
          </HStack>
        </VStack>
      </VStack>
    </View>
  );
};

export default RecentFeedbacks;
