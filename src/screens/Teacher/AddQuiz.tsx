import React from 'react';
import {TextInput} from 'react-native';
import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Button,
  VStack,
  ButtonSpinner,
} from '@gluestack-ui/themed';
import {useForm, Controller} from 'react-hook-form';
import TextBold from '../../components/atoms/Text/TextBold';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import Error from '../../components/molecules/popup/Error';
import {useStore} from '../../store';
import axios from 'axios';
import Success from '../../components/molecules/popup/Success';
import {RouteProp} from '@react-navigation/native';
import {HStack} from '@gluestack-ui/themed';

// const BackgroundImage = require('../../assets/images/TeacherChat.png');
const BackgroundImage = require('../../assets/images/teachercourse.png');

type NavigationType = {
  TeacherCourse: {course: any};
  AddQuiz: {courseId: any};
};

type RouteType = RouteProp<NavigationType, 'AddQuiz'>;

interface QuizInputProps {
  label: string;
  placeholder: string;
  control: any;
  name: string;
}

const QuizInput: React.FC<QuizInputProps> = ({
  label,
  placeholder,
  control,
  name,
}) => {
  return (
    <View mb={'$6'}>
      <TextSemibold text={label} />
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              padding: 10,
              color: 'black',
              borderRadius: 15,
            }}
            placeholder={placeholder}
            placeholderTextColor="black"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
    </View>
  );
};

const AddQuiz = ({route}: {route: RouteType}) => {
  const height = useBottomTabBarHeight();
  const {courseId} = route.params;

  const [showError, setShowError] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const refError = React.useRef(null);
  const refSuccess = React.useRef(null);

  const {control, handleSubmit} = useForm();
  const [questions, setQuestions] = React.useState([{id: 1}]);

  const store = useStore();

  const addQuestion = () => {
    if (questions.length < 3) {
      setQuestions([...questions, {id: questions.length + 1}]);
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const formattedData = {
      instructor: store.user?.user.id_assigned,
      courseId,
      title: data.quizTitle,
      questions: questions.map(q => ({
        question: data[`question${q.id}`],
        option1: data[`question${q.id}_option1`],
        option2: data[`question${q.id}_option2`],
        option3: data[`question${q.id}_option3`],
        option4: data[`question${q.id}_option4`],
        answer: data[`question${q.id}_correctAnswer`],
      })),
    };

    try {
      const response = await axios.post(
        'http://192.168.27.143:8080/teacher/add-quiz',
        formattedData,
      );
      console.log(response.data);
      setLoading(false);
      setShowSuccess(true);
    } catch (error) {
      console.error('Error saving quiz:', error);
      setLoading(false);
      setShowError(true);
    }
  };

  return (
    <View h={'$full'}>
      <ImageBackground source={BackgroundImage} h={'$full'}>
        <StatusBarTeacher text="Add Quiz" />
        <ScrollView padding={'$4'}>
          <QuizInput
            label="Quiz Title"
            placeholder="Enter the quiz title"
            control={control}
            name="quizTitle"
          />
          {questions.map(question => (
            <React.Fragment key={question.id}>
              <QuizInput
                label={`Question ${question.id}:`}
                placeholder="Enter your question here"
                control={control}
                name={`question${question.id}`}
              />
              <QuizInput
                label="Option 1:"
                placeholder="Enter option text here"
                control={control}
                name={`question${question.id}_option1`}
              />
              <QuizInput
                label="Option 2:"
                placeholder="Enter option text here"
                control={control}
                name={`question${question.id}_option2`}
              />
              <QuizInput
                label="Option 3:"
                placeholder="Enter option text here"
                control={control}
                name={`question${question.id}_option3`}
              />
              <QuizInput
                label="Option 4:"
                placeholder="Enter option text here"
                control={control}
                name={`question${question.id}_option4`}
              />
              <QuizInput
                label="Correct Answer:"
                placeholder="Enter correct answer here"
                control={control}
                name={`question${question.id}_correctAnswer`}
              />
            </React.Fragment>
          ))}

          <Box height={'$6'} />
          <VStack space="2xl">
            <Button
              flex={1}
              android_ripple={{color: 'grey'}}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={0}
              borderRadius={'$lg'}
              onPress={addQuestion}>
              <TextBold text="Add new Question" />
            </Button>
            <Button
              onPress={handleSubmit(onSubmit)}
              flex={1}
              android_ripple={{color: 'grey'}}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <HStack>
                {loading && <ButtonSpinner color="black" />}
                <TextBold text="Save" ml={loading ? '$2' : '$0'} />
              </HStack>
            </Button>
          </VStack>
          <Box height={height} />
        </ScrollView>
      </ImageBackground>

      <Error
        bgColor="#F0CCCC"
        setShowModal={setShowError}
        showModal={showError}
        ref={refError}
        text="Error saving quiz. Please try again."
      />
      <Success
        bgColor="#F0CCCC"
        setShowModal={setShowSuccess}
        showModal={showSuccess}
        ref={refSuccess}
        text="Quiz added successfully."
      />
    </View>
  );
};

export default AddQuiz;
