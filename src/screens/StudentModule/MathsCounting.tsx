import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Image,
  HStack,
} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextBold from '../../components/atoms/Text/TextBold';
import MathsCount from '../../components/molecules/MathsCount';

const Counting = require('../../assets/images/counting.png');
const BackgroundImage = require('../../assets/images/MathsCounting-img.png');
// const MathsImage = require('../../assets/images/couting-maths-img.png');

const MathsCounting = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarStudent text="Maths" bgColor="#FFA360" textColor="black" />
        <ScrollView paddingHorizontal={'$8'}>
          <Box height={'$10'} />

          <Box
            bgColor="#FFA360"
            height={70}
            width={'$full'}
            padding={'$2'}
            borderRadius={'$2xl'}
            borderWidth={'$1'}
            justifyContent="center"
            alignItems="center">
            <TextBold text="Counting" fontSize={'$2xl'} padding={'$1'} />
          </Box>
          <Box height={'$6'} />
          <HStack justifyContent="center" alignItems="center">
            <Image
              source={Counting}
              alt="counting"
              w={'$5/6'}
              resizeMode="contain"
            />
          </HStack>
          <Box height={'$6'} />
          <MathsCount />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MathsCounting;
