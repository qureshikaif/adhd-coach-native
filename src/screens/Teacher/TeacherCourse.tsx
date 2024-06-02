import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import UploadButton from '../../components/atoms/Buttons/Uploadbutton';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const BackgroundImage = require('../../assets/images/teachercourse.png');

type NavigationType = {
  AddQuiz: undefined;
};

const TeacherCourse = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Course" />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <AddNewButton text="Add a new lecture" bgColor="#F0CCCC" />
          <Box height={'$8'} />
          <AddNewButton
            text="Add Quiz"
            bgColor="#F0CCCC"
            onPress={() => navigation.navigate('AddQuiz')}
          />
          <Box height={'$8'} />

          <UploadButton text="Lecture 1" />
          <Box height={'$4'} />

          <UploadButton text="Quiz 1" />
          <Box height={'$4'} />

          <UploadButton text="Lecture 2" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherCourse;
