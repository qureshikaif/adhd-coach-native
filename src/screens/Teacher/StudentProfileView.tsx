import { View, ImageBackground, ScrollView, Box, VStack } from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import SideButton from '../../components/atoms/Buttons/VORDoctor';

const BackgroundImage = require('../../assets/images/TeacherChat.png');

const StudentProfileView = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <Box height={'$10'} />
        <ScrollView paddingHorizontal={'$5'}>
          <Box height={'$10'} />
          <TextBold text="Student Profile" fontSize={'$2xl'} />
          <Box height={'$9'} />
          <Box height={'$3'} />
          <TextBold text="Student" fontSize={'$xl'} />
          <VStack space={'2xl'}>
            <SideButton text="Student1" />
            <SideButton text="Student 2" />
            <SideButton text="Student 3" />
            <SideButton text="Student 4" />
            <SideButton text="Student 5" />
          </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StudentProfileView;
