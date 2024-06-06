import {Box, ButtonSpinner, HStack, Image, VStack} from '@gluestack-ui/themed';
import React, {useState, useEffect} from 'react';
import TextBold from '../atoms/Text/TextBold';
import {Pressable} from '@gluestack-ui/themed';
import TextRegular from '../atoms/Text/TextRegular';
import axios from 'axios';
import {useStore} from '../../store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Happy = require('../../assets/images/icons/Happy.png');
const Smiley = require('../../assets/images/icons/smily.png');
const Sad = require('../../assets/images/icons/sad.png');
const Cry = require('../../assets/images/icons/crying.png');
const Stress = require('../../assets/images/icons/stress.png');

const MoodBoard = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const store = useStore();

  useEffect(() => {
    const checkLastSubmission = async () => {
      const lastSubmissionTime = await AsyncStorage.getItem(
        'lastSubmissionTime',
      );
      if (lastSubmissionTime) {
        const timeDifference =
          Date.now() - new Date(lastSubmissionTime).getTime();
        if (timeDifference < 24 * 60 * 60 * 1000) {
          setIsSubmitted(true);
        }
      }
    };

    checkLastSubmission();
  }, []);

  const handleMoodSelect = (mood: any) => {
    setSelectedMood(mood);
    setErrorMessage('');
  };

  const handleSubmit = async () => {
    if (selectedMood) {
      await logMoodToDatabase(selectedMood);
      setIsSubmitted(true);
      await AsyncStorage.setItem(
        'lastSubmissionTime',
        new Date().toISOString(),
      );
    }
  };

  const logMoodToDatabase = async (mood: any) => {
    setLoading(true);
    console.log(`Mood logged: ${mood}`);
    try {
      const response = await axios.post(
        'http://13.127.65.203:8080/student/mood',
        {
          studentId: store.user?.user.id_assigned,
          mood,
        },
      );
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    if (isSubmitted) {
      setErrorMessage(
        'You can only submit your mood once every 24 hours. Please come back tomorrow to update your mood.',
      );
    } else {
      handleSubmit();
    }
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
          borderWidth={selectedMood === 'Sad' ? '$1' : '$0'}
          borderColor={selectedMood === 'Sad' ? 'black' : 'transparent'}
          rounded={selectedMood === 'Sad' ? '$full' : '$none'}>
          <Image source={Sad} size="xs" alt="Sad Icon" />
        </Pressable>
        <Pressable
          onPress={() => handleMoodSelect('Stress')}
          borderWidth={selectedMood === 'Stress' ? '$1' : '$0'}
          borderColor={selectedMood === 'Stress' ? 'black' : 'transparent'}
          rounded={selectedMood === 'Stress' ? '$full' : '$none'}>
          <Image source={Stress} size="xs" alt="Stressed Icon" />
        </Pressable>
        <Pressable
          onPress={() => handleMoodSelect('Cry')}
          borderWidth={selectedMood === 'Cry' ? '$1' : '$0'}
          borderColor={selectedMood === 'Cry' ? 'black' : 'transparent'}
          rounded={selectedMood === 'Cry' ? '$full' : '$none'}>
          <Image source={Cry} size="xs" alt="Cry Icon" />
        </Pressable>
        <Pressable
          onPress={() => handleMoodSelect('Smiley')}
          borderWidth={selectedMood === 'Smiley' ? '$1' : '$0'}
          borderColor={selectedMood === 'Smiley' ? 'black' : 'transparent'}
          rounded={selectedMood === 'Smiley' ? '$full' : '$none'}>
          <Image source={Smiley} size="xs" alt="Smiley Icon" />
        </Pressable>
        <Pressable
          onPress={() => handleMoodSelect('Happy')}
          borderWidth={selectedMood === 'Happy' ? '$1' : '$0'}
          borderColor={selectedMood === 'Happy' ? 'black' : 'transparent'}
          rounded={selectedMood === 'Happy' ? '$full' : '$none'}>
          <Image source={Happy} size="xs" alt="Happy Icon" />
        </Pressable>
      </HStack>
      <VStack alignItems="center" marginVertical={'$6'}>
        <Pressable
          bgColor="#D9981A"
          paddingHorizontal={'$5'}
          paddingVertical={'$2'}
          rounded={'$2xl'}
          width={'$32'}
          alignItems="center"
          onPress={handleButtonClick}
          disabled={isSubmitted}>
          <HStack>
            {loading && <ButtonSpinner color="black" />}
            <TextRegular
              text={isSubmitted ? 'Submitted' : 'Submit'}
              fontSize={'$sm'}
              ml={loading ? '$2' : '$0'}
            />
          </HStack>
        </Pressable>
        {errorMessage && (
          <TextBold
            text={errorMessage}
            fontSize={'$sm'}
            color="red"
            paddingTop={'$2'}
            alignSelf="center"
          />
        )}
      </VStack>
    </VStack>
  );
};

export default MoodBoard;
