import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  HStack,
  Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import TextRegular from '../../components/atoms/Text/TextRegular';

const BackgroundImage = require('../../assets/images/Stud-course-bg.png');

type RouteType = {
  StudentCoursesLectures: {course: any};
};

type NavigationType = {
  StudentAttemptQuiz: {quiz: any};
};

const StudentCoursesLectures = ({
  route,
}: {
  route: RouteProp<RouteType, 'StudentCoursesLectures'>;
}) => {
  const {course} = route.params;
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box />
        <StatusBarStudent
          text={
            course.course_title
              ? course.course_title
              : course.title
              ? course.title
              : 'Course'
          }
          bgColor="#FFA360"
          textColor="black"
        />
        <ScrollView paddingHorizontal={'$7'}>
          <Box height={'$10'} />
          <TextSemibold
            w="$full"
            textAlign="center"
            fontSize={'$2xl'}
            text={`Course created by ${
              course.teacher_name ? course.teacher_name : 'Admin'
            }`}
          />
          <Box height={'$10'} />
          {course.lectures.length > 0 && (
            <TextRegular
              text="Lectures"
              w="$full"
              textAlign="center"
              fontSize={'$xl'}
            />
          )}
          <Box height={'$5'} />
          {course.lectures.map((quiz: any, index: number) => (
            <Pressable key={index}>
              <HStack
                bgColor="#FFA360"
                height={60}
                alignItems="center"
                padding={'$1'}
                borderRadius={'$3xl'}
                borderWidth={'$2'}>
                <TextSemibold
                  text={quiz.lecture_link}
                  textAlign="center"
                  w="$full"
                />
              </HStack>
              <Box height={'$4'} />
            </Pressable>
          ))}
          {course.quizzes.length > 0 && (
            <TextRegular
              text="Quiz"
              w="$full"
              textAlign="center"
              fontSize={'$xl'}
            />
          )}
          <Box height={'$5'} />

          {course.quizzes.map((quiz: any, index: number) => (
            <Pressable
              key={index}
              onPress={() => {
                console.log('Pressed');
                navigation.navigate('StudentAttemptQuiz', {quiz: quiz});
              }}>
              <HStack
                bgColor="#FFA360"
                height={60}
                alignItems="center"
                padding={'$1'}
                borderRadius={'$3xl'}
                borderWidth={'$2'}>
                <TextSemibold
                  text={
                    quiz.title
                      ? quiz.title
                      : quiz.quiz_title
                      ? quiz.quiz_title
                      : 'No Quiz Found'
                  }
                  textAlign="center"
                  w="$full"
                />
              </HStack>
              <Box height={'$4'} />
            </Pressable>
          ))}

          <Box height={'$16'} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StudentCoursesLectures;
