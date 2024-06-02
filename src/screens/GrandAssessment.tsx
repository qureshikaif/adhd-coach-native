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
import {RadioIcon} from '@gluestack-ui/themed';
import {Circle} from 'lucide-react-native';
import {useStore} from '../store';
import Error from '../components/molecules/popup/Error';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const BackgroundImage = require('../assets/images/grand-assessment-bg.png');
const Clock = require('../assets/images/assessment/clock.png');

type NavigationType = {
  StudentMain: undefined;
};

const GrandAssessment = () => {
  const [timeLeft, setTimeLeft] = React.useState(10);
  const {grandAssessmentAnswers, setGrandAssessmentAnswer} = useStore();
  const [showError, setShowError] = React.useState(false);
  const refError = React.useRef(null);

  const navigation = useNavigation<NavigationProp<NavigationType>>();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          setShowError(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };

  const renderOptions = (question: any) => {
    if (question.isOptionImage) {
      return (
        <RadioGroup
          gap={'$3'}
          value={grandAssessmentAnswers[question.id]}
          onChange={value => setGrandAssessmentAnswer(question.id, value)}>
          {question.optionImage.map((option: any, index: number) => (
            <Radio key={index} value={(index + 1).toString()} size="sm">
              <RadioIndicator mr={'$2'} borderColor="black" p={'$2'}>
                <RadioIcon as={Circle} bgColor="black" />
              </RadioIndicator>
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
        <RadioGroup
          gap={'$3'}
          value={grandAssessmentAnswers[question.id]}
          onChange={value => setGrandAssessmentAnswer(question.id, value)}>
          {question.options.map((option: any, index: number) => (
            <Radio key={index} value={(index + 1).toString()} size="sm">
              <RadioIndicator mr={'$2'} borderColor="black" p={'$2'}>
                <RadioIcon as={Circle} bgColor="black" />
              </RadioIndicator>
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
      <StatusBarStudent
        text="Grand Assessment"
        textColor="black"
        bgColor="#FFA360"
      />
      <ScrollView paddingHorizontal={'$5'} showsVerticalScrollIndicator={false}>
        <HStack alignItems="center" space="3xl" paddingVertical={'$10'}>
          <Image source={Clock} alt="Clock" size="lg" />
          <VStack>
            <TextSemibold text="Time Left:" fontSize={'$xl'} />
            <TextBold text={formatTime(timeLeft)} fontSize={'$2xl'} />
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
            onPress={() => {
              let score = 0;
              grandAssessment.forEach(question => {
                if (grandAssessmentAnswers[question.id] === question.answer) {
                  score += 1;
                }
              });
              console.log(`Score: ${score} out of 10`);
            }}
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
      <Error
        heading="Time`s Up!"
        text="Oops. Time expired"
        showModal={showError}
        bgColor="#FFA360"
        setShowModal={value => {
          setShowError(value);
          if (!value) {
            navigation.navigate('StudentMain');
          }
        }}
        ref={refError}
      />
    </ImageBackground>
  );
};

export default GrandAssessment;
