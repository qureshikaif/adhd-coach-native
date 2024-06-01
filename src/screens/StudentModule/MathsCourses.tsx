import {View, ImageBackground, ScrollView, Box,Image, Center} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';

const BackgroundImage = require('../../assets/images/Stud-course-bg.png');
const MathsImage = require('../../assets/images/counting-maths-img.png'); 
const BasicOpt = require('../../assets/images/Basic-opt.png'); 

const MathsCourses = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box />
        <StatusBarStudent text="Maths" bgColor="#FFA360" />
        <Box height={'$3'} />
        <Image source={MathsImage} alt='MathsImage' h='$25%' w = '$full'/>
        
        <ScrollView
          paddingHorizontal={'$10'}
          marginRight={'$16'}
          marginLeft={'-$16'}>

          <Box height={'$4'} />

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

            <Box height={'$4'} />

          <Box height={'$4'} />
          <Image source={BasicOpt} alt='BasicOpt' h='$32' w = '$32' marginLeft={'$50%'}/>
          <Box height={'$10'} />

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
              padding={'$1.5'}/>

            <Box height={'$4'} />

          </Box>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MathsCourses;
