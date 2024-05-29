import {View, ImageBackground, ScrollView, Box,Image} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';

const BackgroundImage = require('../../assets/images/English-course-bg.png');

const EnglishCourses = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box />
        <StatusBarStudent text="English" bgColor="#FFB397" />
        <ScrollView
          paddingHorizontal={'$10'}
          marginRight={'$16'}
          marginLeft={'-$16'}>

          <Box height={'$10'} />
          <Box height={'$10'} />

          <Box
            bgColor="#C5977A"
            height={70}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$12'}>
            <TextSemibold
              text="Alphabets"
              fontSize={'$2xl'}
              marginLeft={'$12'}
              padding={'$1.5'} />
           

          </Box>
          <Box height={'$32'} />
          <Box height={'$32'} />

          <Box
            bgColor="#C5977A"
            height={70}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$12'}>
            <TextSemibold
              text="Colors & Shapes"
              fontSize={'$2xl'}
              marginLeft={'$12'}
              padding={'$1.5'}
            />
          </Box>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default EnglishCourses;
