import {HStack, Image, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../atoms/Text/TextBold';
import {Pressable} from '@gluestack-ui/themed';
import TextSemibold from '../atoms/Text/TextSemibold';

const Happy = require('../../assets/images/icons/Happy.png');
const Smiley = require('../../assets/images/icons/smily.png');
const Sad = require('../../assets/images/icons/sad.png');
const Cry = require('../../assets/images/icons/crying.png');
const Stress = require('../../assets/images/icons/stress.png');

const MoodBoard = () => {
  return (
    <VStack bg="#FFA360" p={'$2'} rounded={'$3xl'} borderWidth={'$2'}>
      <TextBold text="HOW ARE YOU TODAY?" fontSize={'$xl'} padding={'$1.5'} />
      <HStack alignItems="center" w="$1/2">
        <Image source={Sad} size="sm" alt="Sad Icon" />
        <Image source={Stress} size="sm" alt="Sress Icon" />
        <Image source={Cry} size="sm" alt="cry Icon" />
        <Image source={Smiley} size="sm" alt="smiley Icon" />
        <Image source={Happy} size="sm" alt="happy Icon" />
      </HStack>
      <VStack alignItems="center" marginVertical={'$6'}>
        <Pressable
          bgColor="#D9981A"
          paddingHorizontal={'$5'}
          paddingVertical={'$2'}
          rounded={'$2xl'}
          width={110}
          alignItems="center">
          <TextSemibold text="Submit" fontSize={'$lg'} />
        </Pressable>
      </VStack>
    </VStack>
  );
};

export default MoodBoard;
