import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import TotalStudentsEnrolled from '../../components/molecules/TotalStudentsEnrolled';
import { VStack, } from '@gluestack-ui/themed';
import ViewOrRemove from '../../components/atoms/Buttons/ViewOrRemove';
import AddTeacher from '../../components/molecules/popup/AddTeacher';
import TextRegular from '../../components/atoms/Text/TextRegular';
import VORDoctor from '../../components/atoms/Buttons/VORDoctor';

const BackgroundImage = require('../../assets/images/PatientProfile-bg.png');

const PatientProfileHistory = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <Box height={'$10'} />
        <ScrollView paddingHorizontal={'$12'}>
          <Box height={'$10'} />
          <TextBold text="Patient Profile" fontSize={'$2xl'} />
          <Box height={'$9'} />
          <Box height={'$3'} />
          <TextBold text="Patients" fontSize={'$xl'} />
          
        
        <VStack space="xs">
          <Box height={'$3'} />
          {Array.from({length: 5}).map((_, index) => (
            <VORDoctor key={index} />
          ))}
        </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PatientProfileHistory;
