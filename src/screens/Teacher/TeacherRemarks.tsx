import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Button,
  HStack,
  VStack,
} from '@gluestack-ui/themed';
import {TextInput} from 'react-native';
import Svg, {Rect} from 'react-native-svg';

import TextBold from '../../components/atoms/Text/TextBold';

import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import Error from '../../components/molecules/popup/Error';
import {RouteProp} from '@react-navigation/native';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import axios from 'axios'; // Import axios
import {useStore} from '../../store';
import {ButtonSpinner} from '@gluestack-ui/themed';

const BackgroundImage = require('../../assets/images/teachercourse.png');

type RouteType = {
  TeacherRemarks: {course: any};
};

const TeacherRemarks = ({
  route,
}: {
  route: RouteProp<RouteType, 'TeacherRemarks'>;
}) => {
  const course = route.params.course;
  const [quizMarks, setQuizMarks] = useState(0);
  const [remarks, setRemarks] = useState(''); // State for remarks
  const [selectedCourseId, setSelectedCourseId] = useState(''); // State for selected course ID
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const refError = React.useRef(null);
  const height = useBottomTabBarHeight();
  const store = useStore();

  const calculateProgress = () => {
    return quizMarks / 100;
  };

  const handleQuizMarksChange = (value: string) => {
    if (value.trim() === '') {
      setQuizMarks(0);
      return;
    }

    const marks = parseInt(value, 10);
    if (isNaN(marks) || marks < 0 || marks > 100) {
      setQuizMarks(0);
      return;
    }

    setQuizMarks(marks);
  };

  const handleRemarksChange = (value: string) => {
    setRemarks(value);
  };

  const handleSave = async () => {
    setLoading(true);
    if (remarks.trim() === '') {
      setShowError(true);
      return;
    }

    try {
      const response = await axios.post(
        'http://192.168.0.107:8080/teacher/progress-report',
        {
          student: course.student_id,
          course: selectedCourseId,
          teacher: store.user?.user.id_assigned,
          score: quizMarks,
          remarks: remarks,
        },
      );

      console.log('Response:', response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error saving progress report:', error);
      setLoading(false);
    }
  };

  return (
    <View h="$full">
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarTeacher text="Remarks & Stats" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$10'} />
          {course.courses.map((courseItem: any, index: number) => (
            <VStack key={index}>
              <TextSemibold text={`Course ID: ${courseItem.course_id}`} />
              <TextSemibold text={`Course Title: ${courseItem.course_title}`} />
              <TextRegular
                text={`Lectures Covered: ${courseItem.lectures_covered}`}
              />
              <TextRegular text={`Quiz Scores: ${courseItem.quiz_scores}`} />
              <TextRegular text={`Quiz Title: ${courseItem.quiz_title}`} />
              <Box height={'$5'} />
              <Button
                onPress={() => setSelectedCourseId(courseItem.course_id)}
                android_ripple={{color: 'grey'}}
                hardShadow="3"
                size="xl"
                borderColor="black"
                bg={
                  selectedCourseId === courseItem.course_id
                    ? '#4CAF50'
                    : '#DBC9E1'
                }
                borderWidth={1}
                borderRadius={'$lg'}>
                <TextBold text="Select Course" />
              </Button>
              <Box height={'$10'} />
            </VStack>
          ))}

          <Svg height="60" width="100%" viewBox="0 0 200 60">
            <Rect
              x="0"
              y="0"
              width="200"
              height="40"
              fill="none"
              stroke="black"
              strokeWidth="2"
              rx="10"
            />

            <Rect
              x="2"
              y="2"
              width={calculateProgress() * 196}
              height="36"
              fill="#4CAF50"
              rx="10"
            />
          </Svg>
          <Box height={'$5'} />

          <TextBold text="Student Performance" fontSize={'$xl'} />

          <TextInput
            style={{
              height: 40,
              backgroundColor: 'grey',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}
            placeholder="Enter quiz marks (out of 100)"
            keyboardType="numeric"
            onChangeText={handleQuizMarksChange}
            value={quizMarks.toString()}
          />
          <Box height={'$5'} />
          <TextBold text="Teacher Remarks" fontSize={'$xl'} />
          <TextInput
            style={{
              height: 150,
              backgroundColor: 'grey',
              borderWidth: 2,
              textAlignVertical: 'top',
              color: 'white',
              borderRadius: 10,
              padding: 15,
              marginBottom: 10,
            }}
            placeholder="Enter your remarks here..."
            multiline
            onChangeText={handleRemarksChange} // Update remarks
            value={remarks} // Bind remarks to state
          />
          <Box height={'$5'} />
          <HStack space="3xl">
            <Button
              flex={1}
              android_ripple={{color: 'grey'}}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DBC9E1'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Cancel" />
            </Button>
            <Button
              flex={1}
              android_ripple={{color: 'grey'}}
              onPress={handleSave} // Update to handleSave
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DBC9E1'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <HStack>
                {loading && <ButtonSpinner color="black" />}
                <TextSemibold text="Save" ml={loading ? '$2' : '$0'} />
              </HStack>
            </Button>
          </HStack>
          <Box height={height} />
        </ScrollView>
      </ImageBackground>
      <Error
        bgColor="#DBC9E1"
        setShowModal={setShowError}
        showModal={showError}
        ref={refError}
        text="Remarks can`t be empty"
      />
    </View>
  );
};

export default TeacherRemarks;
