import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import SideButton from '../../components/atoms/Buttons/SideButton';

const BackgroundImage = require('../../assets/images/PatientProfile-bg.png');

const PatientProfileHistory = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <Box height={'$10'} />
        <ScrollView paddingHorizontal={'$5'}>
          <Box height={'$10'} />
          <TextBold text="Patient Profile" fontSize={'$2xl'} />
          <Box height={'$9'} />
          <Box height={'$3'} />
          <TextBold text="Patients" fontSize={'$xl'} />
          <VStack space={'2xl'}>
            <SideButton text="Patient 1" />
            <SideButton text="Patient 2" />
            <SideButton text="Patient 3" />
            <SideButton text="Patient 4" />
            <SideButton text="Patient 5" />
          </VStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PatientProfileHistory;
