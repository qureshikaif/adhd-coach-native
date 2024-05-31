import {HStack, Image, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
// import TextSemibold from '../atoms/Text/TextSemibold';
import TextRegular from '../atoms/Text/TextRegular';
import TextSemibold from '../atoms/Text/TextSemibold';

const Happy = require('../../assets/images/icons/Happy.png');
const Smiley = require('../../assets/images/icons/smily.png');
const Sad = require('../../assets/images/icons/sad.png');
const Cry = require('../../assets/images/icons/crying.png');
const Stress = require('../../assets/images/icons/stress.png');
const MoodBoard = () => {
  return (
    <View>
      <VStack
        bg="#FFA360"
        w="$full"
        h="$10"
        p="$4">
        <VStack alignItems="center" justifyContent="center">
          <HStack alignItems="baseline" h="$4/6" space='lg'>
            <Image source={Sad} w={'$8'} h={'$8'} alt="Sad Icon" />
            <Image source={Stress} w={'$8'} h={'$8'} alt="Sress Icon" />
            <Image source={Cry} w={'$8'} h={'$8'} alt="cry Icon" />
            <Image source={Smiley} w={'$8'} h={'$8'} alt="smiley Icon" />
            <Image source={Happy} w={'$8'} h={'$8'} alt="happy Icon" />
          </HStack>
        </VStack>
      </VStack>
    </View>
  );
};

export default MoodBoard;
