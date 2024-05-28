import React from 'react';
import {
  Box,
  HStack,
  Image,
  ImageBackground,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  ScrollView,
  VStack,
} from '@gluestack-ui/themed';
import TextBold from '../components/atoms/Text/TextBold';
import TextSemibold from '../components/atoms/Text/TextSemibold';
import TextRegular from '../components/atoms/Text/TextRegular';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import StatusBarStudent from '../components/molecules/StatusBarStudent';

const BackgroundImage = require('../assets/images/grand-assessment-bg.png');
const Clock = require('../assets/images/assessment/clock.png');

type NavigationType = {
  Signin: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  GrandAssessment: {questionIndex: number};
};

const GrandAssessment = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();

  return (
    <ImageBackground source={BackgroundImage} h={'$full'}>
      <StatusBarStudent text="Grand Assessment" />
      <ScrollView paddingHorizontal={'$5'} showsVerticalScrollIndicator={false}>
        <HStack alignItems="center" space="3xl" paddingVertical={'$10'}>
          <Image source={Clock} alt="Clock" size="lg" />
          <VStack>
            <TextSemibold text="Time Left:" fontSize={'$xl'} />
            <TextBold text="00:00:00" fontSize={'$2xl'} />
          </VStack>
        </HStack>
        <VStack flex={1} justifyContent="space-between" paddingBottom={'$10'}>
          <TextBold text={'Question 1:'} fontSize="$xl" color="#AB4519" />
          <TextRegular text={'Hello, What is my name and what color am i ?'} />
          <Box height={'$10'} />
          {/* <RadioGroup gap={'$3'}>
            {question.options.map((option: any, index: any) => (
              <Radio key={index} value={option} size="sm">
                <RadioIndicator mr={'$2'} borderColor="black" />
                <RadioLabel fontFamily="Poppins-Regular" color="black">
                  {option}
                </RadioLabel>
              </Radio>
            ))}
          </RadioGroup> */}
        </VStack>
      </ScrollView>
    </ImageBackground>
  );
};

export default GrandAssessment;
