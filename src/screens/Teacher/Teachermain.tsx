import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';

import TextSemibold from '../../components/atoms/Text/TextSemibold';
import SideButton from '../../components/atoms/Buttons/SideButton';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

// const BackgroundImage = require('../../assets/images/TeacherMain.png');
const BackgroundImage = require('../../assets/images/teachercourse.png');

const TeacherMain = () => {
  const height = useBottomTabBarHeight();
  const enrolledStudents = [
    'Kaif Qureshi',
    'Aleena Ahmed',
    'Sana Zehra',
    'Ahmed Siddiqui',
    'Abubakar',
  ];

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Home" />
        <Box height={'$10'} />
        <ScrollView paddingHorizontal={'$5'}>
          <TextSemibold text="Good Morning," fontSize={'$3xl'} />
          <TextSemibold text="Abubakar" fontSize={'$2xl'} />
          <Box height={'$8'} />
          <TextSemibold text="Your Courses" fontSize={'$2xl'} />
          <Box height={'$4'} />

          <VStack space={'2xl'}>
            <SideButton text="English" />
            <SideButton text="Maths" />
          </VStack>

          <Box height={'$8'} />
          <TextSemibold text="Enrolled Students" fontSize={'$2xl'} />
          <Box height={'$2'} />

          <VStack space={'md'}>
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
          </VStack>
          <Box height={height * 2} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherMain;
