import React, {useState, useEffect} from 'react';
import {
  Box,
  ButtonSpinner,
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
import axios from 'axios';
import {useStore} from '../../store';
import Success from '../../components/molecules/popup/Success';

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

const QuestionCard = ({
  question,
  control,
  indexQuestion,
}: {
  question: any;
  control: any;
  indexQuestion: any;
}) => {
  return (
    <Box key={question.question_id} marginBottom={20}>
      <TextBold
        text={`Question ${indexQuestion}:`}
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
  const route = useRoute();
  const store = useStore();
  const height = useBottomTabBarHeight();
  const {handleSubmit, control} = useForm();
  const [timeLeft, setTimeLeft] = useState(900);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<NavigationType>>();
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
    setLoading(true);
    let score = 0;
    quiz.questions.forEach((question: any, _index: any) => {
      if (
        data[`question_${question.question_id}`] === question.correct_answer
      ) {
        score += 1;
      }
    });

    axios
      .post('http://192.168.0.107:8080/student/submit-quiz', {
        quizId: quiz.id,
        studentId: store.user?.user.id_assigned,
        teacherId: quiz.instructor,
        scores: score,
      })
      .then(res => {
        console.log(res.data);
        setLoading(false);
        setShowSuccess(true);
      })
      .catch(err => {
        console.log(err.response.data);
        setErrorMessage(err.response.data.message);
        setLoading(false);
        setShowError(true);
      });
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
          {quiz.questions.map((question: any, index: any) => (
            <QuestionCard
              indexQuestion={index + 1}
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
            height={'$12'}
            paddingHorizontal={12}
            marginBottom={10}>
            <HStack>
              {loading && <ButtonSpinner color="black" />}
              <TextSemibold text="Submit Quiz" ml={loading ? '$2' : '$0'} />
            </HStack>
          </Button>
        </VStack>
        <Box height={height} />
      </ScrollView>
      <Error
        heading={errorMessage ? 'Error' : "Time's Up!"}
        text={errorMessage ? errorMessage : 'Time Expired!'}
        showModal={showError}
        bgColor="#FFA360"
        setShowModal={value => {
          setShowError(value);
          if (!value) {
            navigation.navigate('StudentMain');
          }
        }}
      />
      <Success
        text="Quiz submitted"
        showModal={showSuccess}
        bgColor="#FFA360"
        setShowModal={value => {
          setShowSuccess(value);
          if (!value) {
            navigation.navigate('StudentMain');
          }
        }}
      />
    </ImageBackground>
  );
};

export default StudentAttemptQuiz;
