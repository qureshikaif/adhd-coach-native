import {
  ImageBackground,
  ScrollView,
  Box,
  HStack,
  Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import {useStore} from '../../store';

const BackgroundImage = require('../../assets/images/Stud-course-bg.png');

/* Change images path */
// const MathsImage = require('../../assets/images/Stud-course-bg.png');
// const EnglishImage = require('../../assets/images/Stud-course-bg.png');

type NavigationType = {
  StudentCoursesLectures: undefined;
};

const StudentCourses = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const store = useStore();

  const {
    data: enrolledCourses,
    isLoading: isLoadingEnrolled,
    isError: isErrorEnrolled,
  } = useQuery({
    queryKey: ['enrolledCourses'],
    queryFn: async () => {
      const {data} = await axios.get(
        `http://192.168.0.107:8080/student/get-courses/${store.user?.user.id_assigned}`,
      );
      return data;
    },
  });
  const {
    data: courses,
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
  } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/admin/get-courses',
      );
      return data;
    },
  });

  if (isLoadingCourses || isLoadingEnrolled) {
    return <Loading bgImage={BackgroundImage} />;
  }

  if (isErrorCourses || isErrorEnrolled) {
    return (
      <ImageBackground
        source={BackgroundImage}
        h="$full"
        alignItems="center"
        justifyContent="center">
        <TextSemibold text="An error occured while fetching data" />
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={BackgroundImage} h="$full">
      <Box />
      <StatusBarStudent text="Courses" bgColor="#FFA360" textColor="black" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box height={'$10'} />
        <TextSemibold
          text="Enrolled Courses"
          textAlign="center"
          w="$full"
          fontSize={'$2xl'}
        />
        <Box height={'$10'} />
        {enrolledCourses.map((enrolledCourse: any, index: number) => (
          <Pressable
            key={index}
            onPress={() => navigation.navigate('StudentCoursesLectures')}>
            <HStack
              bgColor="#FFA360"
              height={60}
              marginLeft={'-$16'}
              alignItems="center"
              padding={'$1'}
              w={'$3/4'}
              justifyContent="center"
              borderRadius={'$3xl'}
              borderWidth={'$2'}
              marginRight={'$16'}>
              <TextSemibold
                text={enrolledCourse.title}
                fontSize={'$xl'}
                marginLeft={'$12'}
              />
            </HStack>
            <Box height={'$8'} />
          </Pressable>
        ))}
        <TextSemibold
          text="All Courses"
          textAlign="center"
          w="$full"
          fontSize={'$2xl'}
        />
        <Box height={'$10'} />
        {courses.map((course: any, index: number) => (
          <Pressable
            key={index}
            onPress={() => navigation.navigate('StudentCoursesLectures')}>
            <HStack
              bgColor="#FFA360"
              height={60}
              marginLeft={'-$16'}
              alignItems="center"
              padding={'$1'}
              w={'$3/4'}
              justifyContent="center"
              borderRadius={'$3xl'}
              borderWidth={'$2'}
              marginRight={'$16'}>
              <TextSemibold
                text={course.title}
                fontSize={'$xl'}
                marginLeft={'$12'}
              />
            </HStack>
            <Box height={'$8'} />
          </Pressable>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default StudentCourses;
