import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import SideButton from '../../components/atoms/Buttons/SideButton';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {capitalizeFirstLetter} from '../../helpers/capitalizeLetter';
import {useStore} from '../../store';
import Loading from '../Loading';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import TotalStudentsEnrolled from '../../components/molecules/TotalStudentsEnrolled';

const BackgroundImage = require('../../assets/images/teachercourse.png');

type NavigationType = {
  TeacherCourse: undefined;
};

const TeacherMain = () => {
  const store = useStore();
  const height = useBottomTabBarHeight();
  const navigation = useNavigation<NavigationProp<NavigationType>>();

  const {
    data: courses,
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
  } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const {data} = await axios.get(
        `http://10.133.136.53:8080/teacher/get-courses/${store.user?.user.id_assigned}`,
      );
      return data;
    },
  });

  const {
    data: count,
    isLoading: isLoadingCount,
    isError: isErrorStudents,
  } = useQuery({
    queryKey: ['totalStudentsEnrolled'],
    queryFn: async () => {
      const {data} = await axios.get(
        `http://10.133.136.53:8080/teacher/get-count-students/${store.user?.user.id_assigned}`,
      );
      return data.count;
    },
  });

  if (isLoadingCourses || isLoadingCount) {
    return <Loading bgImage={BackgroundImage} />;
  }

  if (isErrorStudents || isErrorCourses) {
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
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Home" />
        <ScrollView paddingHorizontal={'$5'}>
          <Box height={'$10'} />
          <TextSemibold text="Good Morning," fontSize={'$3xl'} />
          <TextSemibold
            fontSize={'$2xl'}
            text={capitalizeFirstLetter(
              store.user ? store.user.user.full_name : 'John Doe',
            )}
          />
          {/* <Box height={'$8'} />
          <TextSemibold text="Your Courses" fontSize={'$2xl'} />
          <Box height={'$4'} /> */}

          {/* <VStack space={'2xl'}>
            {courses.courses.map((course: any, index: number) => (
              <SideButton
                key={index}
                text={course.title}
                onPress={() => navigation.navigate('TeacherCourse')}
              />
            ))}
          </VStack> */}

          <Box height={'$8'} />
          <Box height={'$2'} />
          <TotalStudentsEnrolled
            bgColor="#F0CCCC"
            borderTextColor="$coolGray800"
            count={count}
          />

          {/* <VStack space={'md'}>
            {enrolledStudents.map((student, index) => (
              <Box
                key={index}
                padding={'$3'}
                backgroundColor={'#f0f0f0'}
                borderRadius={15}
                borderWidth={1}
                borderColor={'#ccc'}>
                <TextSemibold text={student} fontSize={'$md'} />
              </Box>
            ))}
          </VStack> */}
          <Box height={height * 2} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherMain;
