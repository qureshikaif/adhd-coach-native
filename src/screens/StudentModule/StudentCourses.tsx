import {View, ImageBackground, ScrollView, Box, Button, Center} from '@gluestack-ui/themed';
import React from 'react';
import { Image } from 'react-native-svg';
import TextBold from '../../components/atoms/Text/TextBold';
import TextMedium from '../../components/atoms/Text/TextMedium';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import TextRegular from '../../components/atoms/Text/TextRegular';

const BackgroundImage = require('../../assets/images/Stud-course-bg.png');

/* Change images path */
//const MathsImage = require('../../assets/images/Stud-course-bg.png');
//const EnglishImage = require('../../assets/images/Stud-course-bg.png');

const StudentCourses = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} style={{ minHeight: '100%' }}>
      <Box/>
      <Box bgColor='#FFA360' height={70} padding={'$3'} > 
          <TextSemibold text="Courses" fontSize={'$3xl'} marginLeft={"$40"}  /> 
            </Box>
        <ScrollView paddingHorizontal={'$10'} marginRight={'$16'} marginLeft={"-$16"}>
        <Box height={'$10'} />
        <Box height={'$10'} />
        
        <Box bgColor='#FFA360' height={70} padding={'$1'} borderRadius={'$3xl'} borderWidth={'$2'} marginRight={"$16"} >  
        <TextSemibold text="   English" fontSize={'$2xl'} marginLeft={"$12"} padding={'$1.5'}/> 
        </Box>
        <Box height={'$32'} />
        <Box height={'$32'} />
        
        <Box bgColor='#FFA360' height={70} padding={'$1'} borderRadius={'$3xl'} borderWidth={'$2'} marginRight={"$16"}>  
        <TextSemibold text="   Maths" fontSize={'$2xl'} marginLeft={"$12"} padding={'$1.5'}/> 

        </Box>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StudentCourses;
