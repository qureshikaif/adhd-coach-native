import {Box, HStack, Image, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../atoms/Text/TextBold';
import {Pressable} from '@gluestack-ui/themed';
import TextRegular from '../atoms/Text/TextRegular';

const Happy = require('../../assets/images/icons/Happy.png');
const Smiley = require('../../assets/images/icons/smily.png');
const Sad = require('../../assets/images/icons/sad.png');
const Cry = require('../../assets/images/icons/crying.png');
const Stress = require('../../assets/images/icons/stress.png');

const MoodBoard = () => {
  return (
    <VStack bg="#FFA360" p={'$2'} rounded={'$3xl'} borderWidth={'$2'}>
      <TextBold
        text="HOW ARE YOU FEELING TODAY?"
        fontSize={'$xl'}
        padding={'$1.5'}
      />
      <Box height={'$4'} />
      <HStack alignItems="center" w="$full" justifyContent="center">
        <Image source={Sad} size="xs" alt="Sad Icon" />
        <Image source={Stress} size="xs" alt="Stressed Icon" />
        <Image source={Cry} size="xs" alt="Cry Icon" />
        <Image source={Smiley} size="xs" alt="Smiley Icon" />
        <Image source={Happy} size="xs" alt="Happy Icon" />
      </HStack>
      <VStack alignItems="center" marginVertical={'$6'}>
        <Pressable
          bgColor="#D9981A"
          paddingHorizontal={'$5'}
          paddingVertical={'$2'}
          rounded={'$2xl'}
          width={110}
          alignItems="center">
          <TextRegular text="Submit" fontSize={'$sm'} />
        </Pressable>
      </VStack>
    </VStack>
  );
};

export default MoodBoard;
