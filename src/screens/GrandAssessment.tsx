import React from 'react';
import {
  Box,
  Center,
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
// import {NavigationProp, useNavigation} from '@react-navigation/native';
import StatusBarStudent from '../components/molecules/StatusBarStudent';
import grandAssessment from '../utils/grandAssessment';
import {Button} from '@gluestack-ui/themed';

const BackgroundImage = require('../assets/images/grand-assessment-bg.png');
const Clock = require('../assets/images/assessment/clock.png');

// type NavigationType = {
//   Signin: undefined;
//   Signup: undefined;
//   ForgotPassword: undefined;
//   GrandAssessment: {questionIndex: number};
// };

const GrandAssessment = () => {
  // const navigation = useNavigation<NavigationProp<NavigationType>>();

  const renderOptions = (question: any) => {
    if (question.isOptionImage) {
      return (
        <RadioGroup gap={'$3'}>
          {question.optionImage.map((option: any, index: number) => (
            <Radio key={index} value={option} size="sm">
              <RadioIndicator mr={'$2'} borderColor="black" />
              <Image
                source={option}
                resizeMode="contain"
                alt={`Option ${index + 1}`}
              />
            </Radio>
          ))}
        </RadioGroup>
      );
    } else {
      return (
        <RadioGroup gap={'$3'}>
          {question.options.map((option: any, index: number) => (
            <Radio key={index} value={option} size="sm">
              <RadioIndicator mr={'$2'} borderColor="black" />
              <RadioLabel fontFamily="Poppins-Regular" color="black">
                {option}
              </RadioLabel>
            </Radio>
          ))}
        </RadioGroup>
      );
    }
  };

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
          {grandAssessment.map((question, index) => (
            <Box key={index} paddingBottom={'$10'}>
              <TextBold
                text={`Question ${question.id}:`}
                fontSize="$xl"
                color="#AB4519"
              />
              <TextRegular text={question.question} />
              <Box height={'$10'} />
              <Center>
                <Image
                  source={question.questionImage}
                  resizeMode="contain"
                  alt="Question Image"
                  w={'$56'}
                />
              </Center>
              <Box height={'$10'} />
              {renderOptions(question)}
            </Box>
          ))}
          <Button
            size="xl"
            borderColor="black"
            bg="#FFB579"
            borderWidth={0.5}
            borderRadius="$lg"
            paddingHorizontal={12}>
            <TextSemibold text="Submit" />
          </Button>
        </VStack>
      </ScrollView>
    </ImageBackground>
  );
};

export default GrandAssessment;
