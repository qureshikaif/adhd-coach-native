import {
  ImageBackground,
  ScrollView,
  Box,
  HStack,
  Pressable,
  VStack,
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
        {enrolledCourses?.map((enrolledCourse: any, index: number) => (
          <HStack px={'$4'}>
            <Pressable
              key={index}
              flex={1}
              onPress={() => navigation.navigate('StudentCoursesLectures')}>
              <HStack
                bgColor="#FFA360"
                height={60}
                alignItems="center"
                padding={'$1'}
                justifyContent="center"
                borderRadius={'$3xl'}
                borderWidth={'$2'}>
                <TextSemibold
                  text={enrolledCourse.course_title}
                  fontSize={'$xl'}
                />
              </HStack>
              <Box height={'$2'} />
            </Pressable>
          </HStack>
        ))}
        <Box height={'$10'} />
        <TextSemibold
          text="All Courses"
          textAlign="center"
          w="$full"
          fontSize={'$2xl'}
        />
        <Box height={'$10'} />
        {courses?.map((course: any, index: number) => (
          <VStack key={index} px={'$4'}>
            <Pressable
              flex={1}
              onPress={() => navigation.navigate('StudentCoursesLectures')}>
              <HStack
                bgColor="#FFA360"
                height={60}
                alignItems="center"
                padding={'$1'}
                justifyContent="center"
                borderRadius={'$3xl'}
                borderWidth={'$2'}>
                <TextSemibold text={course.title} fontSize={'$xl'} />
              </HStack>
              <Box height={'$2'} />
            </Pressable>
            <Pressable
              flex={1}
              onPress={() => navigation.navigate('StudentCoursesLectures')}>
              <HStack
                bgColor="#FF9990"
                height={60}
                alignItems="center"
                padding={'$1'}
                justifyContent="center"
                borderRadius={'$3xl'}
                borderWidth={'$1'}>
                <TextSemibold text={'Enroll now'} fontSize={'$md'} />
              </HStack>
              <Box height={'$8'} />
            </Pressable>
          </VStack>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default StudentCourses;
