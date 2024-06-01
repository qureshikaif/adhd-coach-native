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
        <StatusBarDoctor text='Patient History' isSettingsVisible />
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <Box height={'$10'} />
          <TextInput
            style={{
              height: 300,
              backgroundColor: '#E0E6DE',
              borderWidth: 5,
              textAlignVertical: 'top',
              color: 'black',
              borderRadius: 20,
              padding: 15
            }}
            placeholder="Enter medical history here..." // Placeholder text
            placeholderTextColor={'black'}
            multiline
          />
          <Box height={'$10'} />
          <HStack space="2xl">
            <Button
              android_ripple={{ color: '#DEB5B5' }}
              //   onPress={() => navigation.navigate('ForgotPassword')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#947C7C'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Cancel" />
            </Button>
            <Button
              android_ripple={{ color: '#DEB5B5' }}
              //   onPress={() => navigation.navigate('Signup')}

              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Save changes " />
            </Button>
          </HStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PatientMedicalHistory;
