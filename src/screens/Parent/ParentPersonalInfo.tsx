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

const BackgroundImage = require('../../assets/images/TeacherProfile.png');
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');

const ParentPersonalInfo = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <HStack padding={20}>
          <SideBackButton
            imageProps={{
              size: 'xs',
            }}
            buttonProps={{}}
          />
        </HStack>
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
                  Name : Mrs Ahmed{'\n\n'}
                  Gender : female{'\n\n'}
                  Relationship to Child: Mother{'\n\n'}
                  Spouse Name: M. Ahmed{'\n\n'}
                  Spouse Phone no: +92312-2346789{'\n\n'}
                  Address: House# 120 Lane 2 Falcon{'\n\n'}
                  Phone Number: +92312-2346789{'\n\n'}
                  Email: zehra.ahmed@gmail.com{'\n\n'}
                  Medical History: neurosurgery in 2019
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

export default ParentPersonalInfo;
