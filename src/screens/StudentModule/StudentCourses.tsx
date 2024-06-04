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

type NavigationType = {
  StudentCoursesLectures: {course: any};
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
        'http://192.168.0.107:8080/student/get-all-optional-courses',
      );
      return data;
    },
  });

  const {
    data: compulsoryCourses,
    isLoading: isLoadingCompulsory,
    isError: isErrorCompulsory,
  } = useQuery({
    queryKey: ['compulsoryCourses'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/student/get-compulsory-courses',
      );
      return data;
    },
  });

  if (isLoadingCourses || isLoadingEnrolled || isLoadingCompulsory) {
    return <Loading bgImage={BackgroundImage} />;
  }

  if (isErrorCourses || isErrorEnrolled || isErrorCompulsory) {
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

  console.log(JSON.stringify(compulsoryCourses, null, 2));
  console.log(JSON.stringify(enrolledCourses, null, 2));

  return (
    <ImageBackground source={BackgroundImage} h="$full">
      <Box />
      <StatusBarStudent text="Courses" bgColor="#FFA360" textColor="black" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box height={'$10'} />
        <TextSemibold
          text="Compulsory Courses"
          textAlign="center"
          w="$full"
          fontSize={'$2xl'}
        />
        <Box height={'$5'} />
        {compulsoryCourses?.map((compulsoryCourse: any, index: number) => (
          <HStack px={'$4'} key={index}>
            <Pressable
              flex={1}
              onPress={() =>
                navigation.navigate('StudentCoursesLectures', {
                  course: compulsoryCourse,
                })
              }>
              <HStack
                bgColor="#FFA360"
                height={60}
                alignItems="center"
                padding={'$1'}
                justifyContent="center"
                borderRadius={'$3xl'}
                borderWidth={'$2'}>
                <TextSemibold text={compulsoryCourse.title} fontSize={'$xl'} />
              </HStack>
              <Box height={'$2'} />
            </Pressable>
          </HStack>
        ))}
        <Box height={'$10'} />

        <TextSemibold
          text="Enrolled Courses"
          textAlign="center"
          w="$full"
          fontSize={'$2xl'}
        />
        <Box height={'$5'} />
        {enrolledCourses?.map((enrolledCourse: any, index: number) => (
          <HStack px={'$4'} key={index}>
            <Pressable
              flex={1}
              onPress={() =>
                navigation.navigate('StudentCoursesLectures', {
                  course: enrolledCourse,
                })
              }>
              <HStack
                bgColor="#FFA360"
                height={60}
                alignItems="center"
                padding={'$1'}
                justifyContent="center"
                borderRadius={'$3xl'}
                borderWidth={'$2'}>
                <TextSemibold text={enrolledCourse.title} fontSize={'$xl'} />
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
        <Box height={'$5'} />
        {courses?.map((course: any, index: number) => (
          <VStack key={index} px={'$4'}>
            <Pressable
              flex={1}
              onPress={() =>
                navigation.navigate('StudentCoursesLectures', {course: course})
              }>
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
            <Pressable flex={1}>
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
