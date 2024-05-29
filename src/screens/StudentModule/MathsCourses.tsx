import {View, ImageBackground, ScrollView, Box,Image} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';

const BackgroundImage = require('../../assets/images/Stud-course-bg.png');
// const MathsImage = require('../../assets/images/couting-maths-img.png');

const MathsCourses = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box />
        <StatusBarStudent text="Maths" bgColor="#FFA360" />
        <ScrollView
          paddingHorizontal={'$10'}
          marginRight={'$16'}
          marginLeft={'-$16'}>

          <Box height={'$10'} />
          <Box height={'$10'} />

          <Box
            bgColor="#FFA360"
            height={70}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$12'}>
            <TextSemibold
              text="Counting"
              fontSize={'$2xl'}
              marginLeft={'$12'}
              padding={'$1.5'} />
           

          </Box>
          <Box height={'$32'} />
          <Box height={'$32'} />

          <Box
            bgColor="#FFA360"
            height={70}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$12'}>
            <TextSemibold
              text="Basic Operations"
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

export default MathsCourses;
