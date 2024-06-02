import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  HStack,
} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import BackButton from '../../components/atoms/Buttons/BackButton';
import UploadButton from '../../components/atoms/Buttons/Uploadbutton';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';

const BackgroundImage = require('../../assets/images/teachercourse.png');
// const BackArrow = require('../../../assets/images/BackArrow.png');

const TeacherCourse = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Course" />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <AddNewButton text="Add a new lecture" />
          <Box height={'$8'} />
          <AddNewButton text="Add Quiz" />
          <Box height={'$8'} />

          <UploadButton text="lecture1" />
          <Box height={'$8'} />

          <UploadButton text="Quiz 1" />
          <Box height={'$8'} />

          <UploadButton text="lecture 2" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherCourse;
