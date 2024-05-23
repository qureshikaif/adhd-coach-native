import {View, ImageBackground, ScrollView,Text, Box, Center, Image, HStack, Input, InputField, Button,} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import { VStack } from '@gluestack-ui/themed';
import BackButton from '../../components/atoms/Buttons/BackButton';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import SideScreenButton from '../../components/atoms/Buttons/SideScreenButton';
const TeacherPic = require('../../assets/images/icons/ProfilePicSana.png');
const BackgroundImage = require('../../assets/images/doctor-bg.png');
const Avatar = require('../../assets/images/avatars/login.png');



const PersonalProfile= () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
    <ScrollView paddingHorizontal={'$4'}>
      <HStack justifyContent='center' alignItems='center'>
   
    <TextSemibold text="Profile "paddingRight={'$8'} fontSize={'$3xl'} />
    </HStack>
<Box height={'$10'} />

<Box flex={1}>
        <Box height={650} bgColor='#F3E3E3' justifyContent="flex-start" padding={20}>
        
      
      <Box height={'$5'} />
     
      <Center>
  <Box
  rounded={"$full"}
    overflow="hidden"
    width={100}
    height={100}
    borderWidth={2}
    borderColor="gray.200"
  > 
    <Image source={TeacherPic} alt="Teacher pic" style={{ width: '100%', height: '100%' }} />
  </Box>
  <Text mt={4} fontFamily="Poppins-Regular" >
   Sana Zehra
  </Text>
</Center>
<Box height={'$10'} />
          <SideScreenButton text='Profile info' />
          
          <Box height={'$5'} />
          <SideScreenButton text='Profile Setting' />
          <Box height={'$16'} />
          
          <Box flex={1} justifyContent="center" alignItems="center">
    <Button
        android_ripple={{ color: '#DEB5B5' }}
        hardShadow="3"
        width={120}
        borderColor="black"
        bg={'#EDECD7'}
        borderWidth={1}
        borderRadius={20}
    >
        <TextBold text="Sign Out" />
    </Button>
</Box>

        </Box>
      </Box>
         

          
      </ScrollView>
      
    </ImageBackground>

  </View>
);
};


export default PersonalProfile;
