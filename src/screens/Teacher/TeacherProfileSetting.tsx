import {View, ImageBackground, ScrollView,Text, Box, Center, Image, HStack, Input, InputField, Button,} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import { VStack } from '@gluestack-ui/themed';
import BackButton from '../../components/atoms/Buttons/BackButton';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';

const BackgroundImage = require('../../assets/images/TeacherProfile.png');
const Avatar = require('../../assets/images/avatars/login.png');

const fields = [
    {
      title: 'Email',
      placeholder: 'abu911@adhdcoach.com',
      icon: '',
    },
    {
      title: 'Username',
      placeholder: '911Abu',
      icon: '',
    },
  
    {
      title: 'Password',
      placeholder: '*****',
      icon: '',
    },
  ];
// type NavigationType = {
//   ForgotPasswordVerify: undefined;
// };

const TeacherProfileSetting= () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <StatusBarTeacher text="Profile Settings" isSettingsVisible />
      <Box height={'$8'} />
      <ScrollView paddingHorizontal={'$4'}>
      <Center>
  <Box
  rounded={"$full"}
    overflow="hidden"
    width={100}
    height={100}
    borderWidth={2}
    borderColor="gray.200"
  >
    <Image source={Avatar} alt="avatar icon" style={{ width: '100%', height: '100%' }} />
  </Box>
  <Text mt={4} fontFamily="Poppins-Regular" >
   Mr ABUBAKAR
  </Text>
</Center>
<Box height={'$8'} />
      {fields.map((field, index) => (
              <VStack key={index}>
                <TextSemibold text={field.title} fontSize={'$2xl'}/>
                <Input
                  bgColor="#BEADC3"
                  height={'$12'}
                  rounded={'$lg'}
                  width={'95%'}
                  borderWidth={0}>
                  <InputField
                    type="text"
                    fontFamily="Poppins-Regular"
                    placeholder={field.placeholder}
                    paddingHorizontal={'$6'}
                    placeholderTextColor={'black'}
                  />
                </Input>
                <Box height={'$2'} />
              </VStack>
            ))}
             <Box height={'$10'} />
             <HStack space="lg">
            <Button
              android_ripple={{color: '#DEB5B5'}}
            //   onPress={() => navigation.navigate('ForgotPassword')}
              hardShadow="5"
              size="xl"
              borderColor="black"
              bg={'#908282'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Cancel" />
            </Button>
            <Button
            //   onPress={() => navigation.navigate('Signup')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#B597B8'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Save Changes" />
            </Button>
          </HStack>
      </ScrollView>

    </ImageBackground>

  </View>
);
};


export default TeacherProfileSetting;