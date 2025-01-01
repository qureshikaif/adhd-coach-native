import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  Box,
  Center,
  Image,
  HStack,
  Input,
  InputField,
  Button,
} from '@gluestack-ui/themed';
import React from 'react';

import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import {VStack} from '@gluestack-ui/themed';
import BackButton from '../../components/atoms/Buttons/BackButton';

import SideScreenButton from '../../components/atoms/Buttons/SideScreenButton';
import SideBackButton from '../../components/atoms/Buttons/SideBackButton';
import StatusBarParent from '../../components/molecules/StatusBarParent';

const BackgroundImage = require('../../assets/images/TeacherProfile.png');
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');

const ChildInfo = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarParent text="Child Information" isSettingsVisible />
        <Box height={'$2'} />
        <ScrollView paddingHorizontal={'$4'}>
          <Box flexDirection="row" alignItems="center">
            <Box flex={1}>
              <Box
                height={750}
                bgColor="#F0D9F3"
                justifyContent="flex-start"
                padding={20}
                borderRadius={20}>
                <View style={{alignItems: 'center'}}>
                  <Box
                    rounded={'$full'}
                    overflow="hidden"
                    width={100}
                    height={100}
                    borderWidth={2}
                    borderColor="gray.200">
                    <Image
                      source={TeacherPic}
                      alt="Teacher"
                      style={{width: '100%', height: '100%'}}
                    />
                  </Box>
                  <Text
                    style={{
                      marginTop: 0,
                      marginLeft: 15,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Mrs Ahmed
                  </Text>
                </View>
                <Box height={'$5'} />
                <Text mt={4} fontFamily="Poppins-Regular">
                  Name : Ali Ahmed Age: 7{'\n'}
                  Gender : Male Blood Group: A+{'\n'}
                  Father Name: M. Ahmed{'\n'}
                  Father Phone no: +9232-34321344{'\n'}
                  Mother name : Zehra Ahmed{'\n'}
                  Mother Phone No: +9232-34321344{'\n'}
                  Address: House# 120 Lane 2 Falcon{'\n'}
                  Diagnosis: ADHD at 7{'\n'}
                  Symptoms: Difficulty concentrating, impulsivity, hyperactivity
                  {'\n'}
                  Treatment Plan: Combination of behavioral therapy and
                  medication{'\n'}
                  Medication: [Specify medication name, dosage, and frequency]
                  {'\n'}
                  Ongoing Monitoring: Regular check-ups with healthcare
                  providers to adjust treatment as needed
                </Text>
              </Box>
              <Box height={'$5'} />
            </Box>
          </Box>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ChildInfo;
