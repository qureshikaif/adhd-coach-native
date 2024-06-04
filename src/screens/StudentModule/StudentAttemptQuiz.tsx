import React, {useState, useEffect} from 'react';
import {
  Box,
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
}: {
  option: string;
  onPress: () => void;
}) => {
  return (
    <Button
      onPress={onPress}
      size="sm"
      borderColor="black"
      bg="#FFB579"
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
  onSelectOption,
}: {
  question: Question;
  onSelectOption: (optionId: number) => void;
}) => {
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
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            onPress={() => onSelectOption(question.question_id)}
          />
        ))}
      </VStack>
    </Box>
  );
};

const StudentAttemptQuiz = () => {
  const [timeLeft, setTimeLeft] = useState(10000);
  const [showError, setShowError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const route = useRoute();

  const {quiz} = route.params as {quiz: Quiz[]};

  console.log('Quiz', quiz);
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

  return (
    <ImageBackground source={BackgroundImage} h={'$full'}>
      <StatusBarStudent
        text="Attempt Quiz"
        textColor="black"
        bgColor="#FFA360"
      />
      <ScrollView paddingHorizontal={'$5'} showsVerticalScrollIndicator={false}>
        <VStack>
          <Box>
            <Image source={Clock} alt="Clock" size="lg" />
            <VStack>
              <TextSemibold text="Time Left:" fontSize={'$xl'} />
              <TextBold text={formatTime(timeLeft)} fontSize={'$2xl'} />
            </VStack>
          </Box>
          {quiz.questions.map(question => (
            <QuestionCard
              key={question.question_id}
              question={question}
              onSelectOption={() => console.log('Pressed')}
            />
          ))}
        </VStack>
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
