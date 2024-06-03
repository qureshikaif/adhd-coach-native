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
  AttemptQuiz: {quiz: Question[]};
};

type Option = {
  id: number;
  text: string;
};

type Question = {
  id: number;
  question: string;
  options: Option[];
  answer: number;
};

const OptionButton = ({
  option,
  onPress,
}: {
  option: Option;
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
      {option.text}
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
    <Box key={question.id} marginBottom={20}>
      <TextBold
        text={`Question ${question.id}:`}
        fontSize="$xl"
        color="#AB4519"
      />
      <TextRegular text={question.question} />
      <Box height={10} />
      <VStack>
        {question.options.map((option, index) => (
          <OptionButton
            key={option.id}
            option={option}
            onPress={() => onSelectOption(option.id)}
          />
        ))}
      </VStack>
    </Box>
  );
};

const StudentAttemptQuiz = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [showError, setShowError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const route = useRoute();

  const {quiz} = route.params as {quiz: Question[]};

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

  const onSelectOption = (optionId: number) => {
    setSelectedOptions(prevOptions => {
      const updatedOptions = [...prevOptions];
      const index = quiz.findIndex(question => question.id === optionId);
      if (index !== -1) {
        updatedOptions[index] = optionId;
      }
      return updatedOptions;
    });
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
          {quiz.map(question => (
            <QuestionCard
              key={question.id}
              question={question}
              onSelectOption={onSelectOption}
            />
          ))}
          <Button
            onPress={() => {
              let score = 0;
              quiz.forEach((question, index) => {
                if (selectedOptions[index] === question.answer) {
                  score += 1;
                }
              });
              console.log(`Score: ${score} out of ${quiz.length}`);
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
        ref={refError}
      />
    </ImageBackground>
  );
};

export default StudentAttemptQuiz;
