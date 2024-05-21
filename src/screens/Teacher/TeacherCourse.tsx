import {View, ImageBackground, ScrollView, Box,HStack} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import { TouchableOpacity } from 'react-native';
import BackButton from '../../components/atoms/Buttons/BackButton';
import UploadButton from '../../components/atoms/Buttons/Uploadbutton';
// import BackButton from 'react';

const BackgroundImage = require('../../assets/images/teachercourse.png');
const BackArrow = require('../../../assets/images/BackArrow.png');
// type NavigationType = {
//   ForgotPasswordVerify: undefined;
// };

const TeacherCourse= () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
    
      <HStack
            alignItems="center"
            width={'$full'}
            justifyContent="space-between"
            padding={'$4'}>
            <BackButton
              imageProps={{
                size: 'xs',
              }}
            />
            <TextBold text="Course" paddingRight={'$8'} fontSize={'$3xl'} />
            <View />
          </HStack>
       <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <AddNewButton text="Add a new lecture" />
          <Box height={'$8'} />
          <AddNewButton text="Add a new Assignment" />
          <Box height={'$8'} />
     
     <UploadButton text='lecture1'/> 
     <Box height={'$8'} />
     
     <UploadButton text='Assignment'/> 
     <Box height={'$8'} />
     
     <UploadButton text='lecture 2'/> 
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherCourse;
