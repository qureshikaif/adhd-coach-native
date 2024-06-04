import React, {useState, useEffect} from 'react';
import {
  Box,
  HStack,
  Image,
  ImageBackground,
  ScrollView,
  VStack,
} from '@gluestack-ui/themed';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import {Button} from '@gluestack-ui/themed';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Error from '../../components/molecules/popup/Error';
import TextBold from '../../components/atoms/Text/TextBold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useForm, Controller} from 'react-hook-form';

const BackgroundImage = require('../../assets/images/grand-assessment-bg.png');
const Clock = require('../../assets/images/assessment/clock.png');

type NavigationType = {
  AttemptQuiz: {quiz: Quiz[]};
  StudentMain: undefined;
};

type Option = {
  option: string;
};

type Question = {
  correct_answer: string;
  options: Option[];
  question_id: number;
  title: string;
};

type Quiz = {
  course_id: number;
  id: number;
  instructor: null;
  questions: Question[];
  title: string;
};

const OptionButton = ({
  option,
  onPress,
  isSelected,
}: {
  option: string;
  onPress: () => void;
  isSelected: boolean;
}) => {
  return (
    <Button
      onPress={onPress}
      size="sm"
      borderColor="black"
      bg={isSelected ? '#FFB579' : '#FFF'}
      borderWidth={0.5}
      borderRadius="$lg"
      paddingHorizontal={12}
      marginBottom={10}>
      <TextSemibold text={option} />
    </Button>
  );
};

const QuestionCard = ({question, control}: {question: any; control: any}) => {
  return (
    <Box key={question.question_id} marginBottom={20}>
      <TextBold
        text={`Question ${question.question_id}:`}
        fontSize="$xl"
        color="#AB4519"
      />
      <TextRegular text={question.title} />
      <Box height={10} />
      <VStack>
        {question.options.map((option: any, index: any) => (
          <Controller
            key={index}
            control={control}
            name={`question_${question.question_id}`}
            rules={{required: 'This question is required'}}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <>
                <OptionButton
                  option={option}
                  onPress={() => onChange(option)}
                  isSelected={value === option}
                />
                {error && (
                  <TextRegular text={error.message} style={{color: 'red'}} />
                )}
              </>
            )}
          />
        ))}
      </VStack>
    </Box>
  );
};

const StudentAttemptQuiz = () => {
  const height = useBottomTabBarHeight();
  const [timeLeft, setTimeLeft] = useState(900);
  const [showError, setShowError] = useState(false);
  const {handleSubmit, control} = useForm();
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const route = useRoute();

  const {quiz} = route.params as {quiz: any};

  useEffect(() => {
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

  const onSubmit = (data: any) => {
    let score = 0;
    quiz.questions.forEach((question: any, _index: any) => {
      if (
        data[`question_${question.question_id}`] === question.correct_answer
      ) {
        score += 1;
      }
    });
    console.log('Score:', score);
  };

  return (
    <ImageBackground source={BackgroundImage} h={'$full'}>
      <StatusBarStudent
        text="Attempt Quiz"
        textColor="black"
        bgColor="#FFA360"
      />
      <ScrollView
        paddingHorizontal={'$5'}
        paddingVertical={'$5'}
        showsVerticalScrollIndicator={false}>
        <VStack>
          <HStack space="lg">
            <Image source={Clock} alt="Clock" size="lg" />
            <VStack>
              <TextSemibold text="Time Left:" fontSize={'$xl'} />
              <TextBold text={formatTime(timeLeft)} fontSize={'$2xl'} />
            </VStack>
          </HStack>
          <Box height={'$10'} />
          {quiz.questions.map((question: any) => (
            <QuestionCard
              key={question.question_id}
              question={question}
              control={control}
            />
          ))}
          <Button
            onPress={handleSubmit(onSubmit)}
            size="sm"
            borderColor="black"
            bg="#FFA360"
            borderWidth={0.5}
            borderRadius="$lg"
            paddingHorizontal={12}
            marginBottom={10}>
            <TextSemibold text="Submit Quiz" />
          </Button>
        </VStack>
        <Box height={height} />
      </ScrollView>
      <Error
        heading="Time's Up!"
        text="Oops. Time expired"
        showModal={showError}
        bgColor="#FFA360"
        setShowModal={value => {
          setShowError(value);
          if (!value) {
            navigation.navigate('StudentMain');
          }
        }}
      />
    </ImageBackground>
  );
};

export default StudentAttemptQuiz;
