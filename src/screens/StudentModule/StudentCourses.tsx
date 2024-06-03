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
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';

const BackgroundImage = require('../../assets/images/Stud-course-bg.png');

/* Change images path */
// const MathsImage = require('../../assets/images/Stud-course-bg.png');
// const EnglishImage = require('../../assets/images/Stud-course-bg.png');

type NavigationType = {
  StudentCoursesLectures: undefined;
};

const StudentCourses = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.27.131:8080/admin/get-courses',
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loading bgImage={BackgroundImage} />;
  }

  if (isError) {
    return <TextSemibold text="An error occured while fetching data" />;
  }
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box />
        <StatusBarStudent text="Courses" bgColor="#FFA360" textColor="black" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          paddingHorizontal={'$10'}
          marginRight={'$16'}
          marginLeft={'-$16'}>
          <Box height={'$10'} />
          <Box height={'$10'} />
          {courses.map((course: any, index: number) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate('StudentCoursesLectures')}>
              <HStack
                bgColor="#FFA360"
                height={60}
                alignItems="center"
                padding={'$1'}
                borderRadius={'$3xl'}
                borderWidth={'$2'}
                marginRight={'$16'}>
                <TextSemibold
                  text={course.title}
                  fontSize={'$2xl'}
                  marginLeft={'$12'}
                />
              </HStack>
              <Box height={'$16'} />
            </Pressable>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StudentCourses;
