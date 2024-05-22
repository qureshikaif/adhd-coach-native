import {View, ImageBackground, ScrollView,Text, Box, Center, Image, HStack, Input, InputField, Button,} from '@gluestack-ui/themed';
import React from 'react';

import AddNewButton from '../../components/atoms/Buttons/AddNewButton';
import { VStack } from '@gluestack-ui/themed';
import BackButton from '../../components/atoms/Buttons/BackButton';

import SideScreenButton from '../../components/atoms/Buttons/SideScreenButton';

const BackgroundImage = require('../../assets/images/TeacherEditPersonal.png');
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');



const TeacherEditPersonalInfo= () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      
      <Box height={'$7'} />
      <ScrollView paddingHorizontal={'$4'}>
      <Box flexDirection="row" alignItems="center">
     
    <BackButton
        imageProps={{
            size: 'xs',
        }}
        
    />
    <Box
        rounded={"$full"}
        overflow="hidden"
        width={100}
        height={100}
        borderWidth={2}
        borderColor="gray.200"
        ml={50}  
    >
        <Image source={TeacherPic} alt="Teacher" style={{ width: '100%', height: '100%' }} />
    </Box>
    <Text mt={0} ml={2} fontFamily="Poppins-Regular">
        joined 1 year ago
    </Text>
</Box>



<Box height={'$5'} />

<Box flex={1}>
    <Box height={770} bgColor='#E3E8EC' justifyContent="flex-start" padding={20}>
        <Text mt={4} fontFamily="Poppins-Regular">
            Personal Information:{"\n"}
            Full Name: professor ABUBKAR{"\n"}
            ID: ali23{"\n"}
            Gender: male{"\n"}
            Date of Birth: 01-18-1990{"\n"}
            Phone Number: +9234-34224387{"\n"}
            Email: ali12@gmail.com{"\n"}
            Address: 168 Falcon{"\n"}
            Medical License Number: GcDr8521{"\n"}
            {"\n"}
            Professional Information:{"\n"}
            Area of Expertise: Mathematics{"\n"}
            Education Degree: Master of Education{"\n"}
            Board Certification: 58493rw{"\n"}
            Years of Experience: 15{"\n"}
            Affiliated Sunnyville High School:{"\n"}
            {"\n"}
            Educational Background:{"\n"}
            Graduate School Attended: Eastern University{"\n"}
            Degree: Master of Education{"\n"}
            Graduation Year: 2009{"\n"}
            {"\n"}
            Account Password:{"\n"}
            Password: ***********
        </Text>
    </Box>
</Box>


         
       
         

          
      </ScrollView>
      
    </ImageBackground>

  </View>
);
};


export default TeacherEditPersonalInfo;
