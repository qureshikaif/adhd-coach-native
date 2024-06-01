import { View, ImageBackground, ScrollView, Box, VStack, Button, HStack } from '@gluestack-ui/themed';
import { TextInput } from 'react-native';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';

const BackgroundImage = require('../../assets/images/patienthistory.png');

const PatientMedicalHistory = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={BackgroundImage} style={{ flex: 1 }}>
       
        <ScrollView contentContainerStyle={{ padding: 10 }}>
       
         
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PatientMedicalHistory;
