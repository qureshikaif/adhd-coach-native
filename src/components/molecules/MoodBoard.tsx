import {Box, HStack, Image, VStack} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import TextBold from '../atoms/Text/TextBold';
import {Pressable} from '@gluestack-ui/themed';
import TextRegular from '../atoms/Text/TextRegular';

const Happy = require('../../assets/images/icons/Happy.png');
const Smiley = require('../../assets/images/icons/smily.png');
const Sad = require('../../assets/images/icons/sad.png');
const Cry = require('../../assets/images/icons/crying.png');
const Stress = require('../../assets/images/icons/stress.png');

const MoodBoard = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = mood => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      logMoodToDatabase(selectedMood);
    }
  };

  const logMoodToDatabase = mood => {
    // Simulate a database call
    console.log(`Mood logged: ${mood}`);
    // Add your database logic here
  };

  return (
    <VStack bg="#FFA360" p={'$2'} rounded={'$3xl'} borderWidth={'$2'}>
      <TextBold
        text="HOW ARE YOU FEELING TODAY?"
        fontSize={'$xl'}
        padding={'$1.5'}
      />
      <Box height={'$4'} />
      <HStack alignItems="center" w="$full" justifyContent="center">
        <Pressable
          onPress={() => handleMoodSelect('Sad')}
          style={
            selectedMood === 'Sad'
              ? {borderWidth: 2, borderColor: 'black', borderRadius: 8}
              : {}
          }>
          <Image source={Sad} size="xs" alt="Sad Icon" />
        </Pressable>
        <Pressable
          onPress={() => handleMoodSelect('Stress')}
          style={
            selectedMood === 'Stress'
              ? {borderWidth: 2, borderColor: 'black', borderRadius: 100}
              : {}
          }>
          <Image source={Stress} size="xs" alt="Stressed Icon" />
        </Pressable>
        <Pressable
          onPress={() => handleMoodSelect('Cry')}
          style={
            selectedMood === 'Cry'
              ? {borderWidth: 2, borderColor: 'black', borderRadius: 8}
              : {}
          }>
          <Image source={Cry} size="xs" alt="Cry Icon" />
        </Pressable>
        <Pressable
          onPress={() => handleMoodSelect('Smiley')}
          style={
            selectedMood === 'Smiley'
              ? {borderWidth: 2, borderColor: 'black', borderRadius: 100}
              : {}
          }>
          <Image source={Smiley} size="xs" alt="Smiley Icon" />
        </Pressable>
        <Pressable
          onPress={() => handleMoodSelect('Happy')}
          style={
            selectedMood === 'Happy'
              ? {borderWidth: 2, borderColor: 'black', borderRadius: 8}
              : {}
          }>
          <Image source={Happy} size="xs" alt="Happy Icon" />
        </Pressable>
      </HStack>
      <VStack alignItems="center" marginVertical={'$6'}>
        <Pressable
          bgColor="#D9981A"
          paddingHorizontal={'$5'}
          paddingVertical={'$2'}
          rounded={'$2xl'}
          width={110}
          alignItems="center"
          onPress={handleSubmit}>
          <TextRegular text="Submit" fontSize={'$sm'} />
        </Pressable>
      </VStack>
    </VStack>
  );
};

export default MoodBoard;
