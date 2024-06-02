import { View, ImageBackground, ScrollView, Box, VStack } from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import SideButton from '../../components/atoms/Buttons/VORDoctor';
import TextSemibold from '../../components/atoms/Text/TextSemibold';

const BackgroundImage = require('../../assets/images/TeacherMain.png');

const TeacherMain = () => {
  
  const enrolledStudents = [1, 2, 3, 4];

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <Box height={'$10'} />
        <ScrollView paddingHorizontal={'$5'}>
          <TextBold text="Morning" fontSize={'$2xl'} />
          <Box height={'$2'} />
          <TextSemibold text="Abubakar" fontSize={'$xl'} />
          <Box height={'$12'} />
          <TextBold text="Courses" fontSize={'$xl'} />
          <Box height={'$8'} />
          
          <VStack space={'2xl'}>
            <SideButton text="course 1" />
            <SideButton text="course 2" />
          
          </VStack>

          <Box height={'$8'} />
          <TextBold text="Enrolled Students" fontSize={'$xl'} />
          <Box height={'$2'} />

          <VStack space={'md'}>
            {enrolledStudents.map((student, index) => (
              <Box 
                key={index} 
                padding={'$3'} 
                backgroundColor={'#f0f0f0'} 
                borderRadius={15} // Adjust border radius
                borderWidth={1} 
                borderColor={'#ccc'}
              >
                <TextSemibold text={student} fontSize={'$md'} />
              </Box>
            ))}
          </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherMain;
