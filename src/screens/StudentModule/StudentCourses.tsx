import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Center,
  Image,
  VStack,
  HStack,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';

const BackgroundImage = require('../../assets/images/Stud-course-bg.png');

/* Change images path */
const MathsImage = require('../../assets/images/Stud-course-bg.png');
const EnglishImage = require('../../assets/images/Stud-course-bg.png');

const StudentCourses = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box />
        <StatusBarStudent text="Courses" bgColor="#FFA360" textColor="black" />
        <ScrollView
          paddingHorizontal={'$10'}
          marginRight={'$16'}
          marginLeft={'-$16'}>
          <Box height={'$10'} />
          <Box height={'$10'} />

          <HStack
            bgColor="#FFA360"
            height={60}
            alignItems="center"
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$16'}>
            <TextSemibold text="English" fontSize={'$2xl'} marginLeft={'$12'} />
          </HStack>
          <Box height={'$16'} />

          <HStack
            alignItems="center"
            bgColor="#FFA360"
            height={60}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$16'}>
            <TextSemibold text="Maths" fontSize={'$2xl'} marginLeft={'$12'} />
          </HStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StudentCourses;
