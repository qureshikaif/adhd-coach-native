import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Button,
  HStack,
  Text,
} from '@gluestack-ui/themed';
import {TextInput} from 'react-native';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const BackgroundImage = require('../../assets/images/patienthistory.png');

const PatientMedicalHistory = () => {
  const height = useBottomTabBarHeight();
  return (
    <View h="$full">
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarDoctor text="Medical History" />
        <ScrollView paddingHorizontal={'$4'} paddingVertical={'$5'}>
          <Box
            height={450}
            bgColor="#F0D9F3"
            justifyContent="flex-start"
            padding={20}
            borderRadius={20}
            borderWidth={1}>
            <ScrollView>
              <Text mt={4} fontFamily="Poppins-Regular">
                Patient Name: Emily Davis {'\n'}
                Age: 6 Gender: Female {'\n'}
                Medical History: {'\n\n'}
                Diagnosis: Attention Deficit Hyperactivity Disorder (ADHD) at
                age 7. {'\n'}
                Symptoms: Difficulty concentrating, impulsivity, hyperactivity.{' '}
                {'\n'}
                Treatment Plan: Combination of behavioral therapy and
                medication. {'\n'}
                Therapy: Twice weekly sessions focusing on organizational skills
                and impulse control. {'\n'}
                Medication: [Specify medication name, dosage, and frequency].{' '}
                {'\n'}
              </Text>
            </ScrollView>
          </Box>
          <Box height={'$5'} />

          <TextBold text="Patient Remarks" fontSize={'$xl'} />

          <TextInput
            style={{
              height: 150,
              backgroundColor: '#E0E6DE',
              borderWidth: 1,
              textAlignVertical: 'top',
              color: 'black',
              borderRadius: 20,
              padding: 15,
            }}
            placeholder="Enter medical Remarks here..."
            placeholderTextColor={'black'}
            multiline
          />
          <Box height={'$10'} />
          <HStack space="xl">
            <Button
              flex={1}
              android_ripple={{color: '#DEB5B5'}}
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
              flex={1}
              android_ripple={{color: '#DEB5B5'}}
              //   onPress={() => navigation.navigate('Signup')}

              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Save" />
            </Button>
          </HStack>
          <Box height={height} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PatientMedicalHistory;
