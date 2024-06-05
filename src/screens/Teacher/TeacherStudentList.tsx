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
  TeacherRemarks: {course: any};
};

const TeacherStudentList = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const store = useStore();

  const {
    data: studentCourses,
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
  } = useQuery({
    queryKey: ['studentCourses'],
    queryFn: async () => {
      const {data} = await axios.get(
        `http://192.168.0.107:8080/teacher/get-student-courses/${store.user?.user.id_assigned}`,
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

  console.log(studentCourses);

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Student Progress" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$8'} />
          <TextSemibold text="Students" fontSize={'$2xl'} />
          <TextRegular
            text="These are the list of students who are enrolled in one of your courses."
            fontSize={'$xs'}
          />

          <Box height={'$4'} />
          <VStack space={'2xl'}>
            {studentCourses.map((course: any, index: number) => (
              <SideButton
                key={index}
                text={course.student_name}
                onPress={() =>
                  navigation.navigate('TeacherRemarks', {course: course})
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

export default TeacherStudentList;
