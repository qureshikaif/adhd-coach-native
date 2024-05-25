import {Center, HStack, Image, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import TextRegular from '../atoms/Text/TextRegular';

const StarFilled = require('../../assets/images/icons/star.png');
// const StarHollow = require('../../assets/images/icons/star-dark.png');

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
        <Center>
          <HStack justifyContent="center" alignItems="center" h="$4/6">
            <Image source={StarFilled} w={'$9'} h={'$9'} alt="Star Icon" />
            <Image source={StarFilled} w={'$9'} h={'$9'} alt="Star Icon" />
            <Image source={StarFilled} w={'$9'} h={'$9'} alt="Star Icon" />
            <Image source={StarFilled} w={'$9'} h={'$9'} alt="Star Icon" />
            <Image source={StarFilled} w={'$9'} h={'$9'} alt="Star Icon" />

            {/* <Image source={StarHollow} w={'$6'} h={'$6'} alt="Star Icon" /> */}
          </HStack>
        </Center>
      </VStack>
    </View>
  );
};

export default RecentFeedbacks;
