import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {useStore} from '../../store';
import SideButton from '../../components/atoms/Buttons/SideButton';
import TextRegular from '../../components/atoms/Text/TextRegular';

const BackgroundImage = require('../../assets/images/teachercourse.png');

type NavigationType = {
  TeacherCourse: {course: any};
};

const TeacherCourseList = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const store = useStore();

  const {
    data: courses,
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
  } = useQuery({
    queryKey: ['coursesTeacherAssigned'],
    queryFn: async () => {
      const {data} = await axios.get(
        `https://adhd-coach-backend.vercel.app/teacher/get-courses/${store.user?.user.id_assigned}`,
      );
      return data;
    },
  });

  if (isLoadingCourses) {
    return <Loading bgImage={BackgroundImage} />;
  }

  if (isErrorCourses) {
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

  console.log('COURSES, ', courses);

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Course Plan" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$8'} />
          <TextSemibold text="Your Courses" fontSize={'$2xl'} />
          <Box height={'$4'} />
          <VStack space={'2xl'}>
            {!courses.courses && <TextRegular text="No courses found" />}
            {courses.courses?.map((course: any, index: number) => (
              <SideButton
                key={index}
                text={course.title}
                onPress={() =>
                  navigation.navigate('TeacherCourse', {course: course})
                }
              />
            ))}
          </VStack>
          <Box height={'$8'} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherCourseList;
