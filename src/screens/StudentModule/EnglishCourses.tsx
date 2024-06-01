import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Image,
  HStack,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
const AbcImage = require('../../assets/images/kids-abc.png');
const ShapesImage = require('../../assets/images/kids-shapes.png');
const BackgroundImage = require('../../assets/images/English-course-bg.png');

const EnglishCourses = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box />
        <StatusBarStudent text="English" bgColor="#FFA169" textColor="black" />
        <ScrollView
          paddingHorizontal={'$10'}
          marginRight={'$16'}
          marginLeft={'-$16'}>
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
              marginLeft={'$10'}
              padding={'$1.5'}
            />
          </Box>
          <HStack paddingLeft={100}>
            <Image source={AbcImage} alt="abc kid" w={'$full'} h={'$40'} />
          </HStack>

          <Box height={'$10'} />

          <Box
            bgColor="#C5977A"
            height={70}
            width={'$full'}
            padding={'$1'}
            borderRadius={'$3xl'}
            borderWidth={'$2'}
            marginRight={'$12'}>
            <TextSemibold
              text="Colors & Shapes"
              fontSize={'$2xl'}
              marginLeft={'$10'}
              padding={'$1.5'}
            />
          </Box>
          <HStack paddingLeft={100}>
            <Image source={ShapesImage} alt="Shape kid" w={'$full'} h={'$48'} />
          </HStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default EnglishCourses;
