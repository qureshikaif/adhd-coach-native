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

const BackgroundImage = require('../../assets/images/TeacherProfileSetting.png');
const Avatar = require('../../assets/images/avatars/login.png');
const BoxImage = require('../../assets/images/TeacherProfileSettings.png');


const TeacherProfile= () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      
      <Box height={'$20'} />
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
<Box height={'$20'} />

<Box flex={1}>
        <Box height={450} bgColor='#CDAAAA' justifyContent="flex-start" padding={20}>
          <SideScreenButton text='Personal Info' />
          <Box height={'$5'} />
          <SideScreenButton text='Edit Peronal Info' />
          <Box height={'$16'} />
          <Button
            android_ripple={{color: '#DEB5B5'}}
              hardShadow="3"
              
              width={150}
              borderColor="black"
              bg={'#EDECD7'}
              borderWidth={1}
              borderRadius={20}>
                
              <TextBold text="Sign Out" />
              
            </Button>
        </Box>
      </Box>
         

          
      </ScrollView>
      
    </ImageBackground>

  </View>
);
};


export default TeacherProfile;
