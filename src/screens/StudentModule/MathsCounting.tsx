import {View, ImageBackground, ScrollView, Box,Image, HStack, VStack, Center} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextBold from '../../components/atoms/Text/TextBold';
import MathsCount from '../../components/molecules/MathsCount';

const BackgroundImage = require('../../assets/images/MathsCounting-img.png');
const MathsImage = require('../../assets/images/counting-maths-img.png');

const MathsCounting = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box/>
        <StatusBarStudent text="Maths" bgColor="#FFA360" />
        
        <Box height={'$12'} />

        <Box  
            paddingHorizontal={'$10'}
            marginRight={'$12'}
            bgColor="#FFA360"
            height={63}
            padding={'$2'}
            borderRadius={'$2xl'}
            borderWidth={'$1'}
            marginLeft={'$10'}>

            <TextBold
              text="Counting"
              fontSize={'$2xl'}
              marginLeft={'$16'}
              padding={'$1'} />
      
          </Box>
          <Box height={'$4'} />
        <Image source={MathsImage} alt='MathsImage' h='$56' w = '$full'/>
          <Box height={'$12'} />

          <ScrollView>
          <MathsCount />
          </ScrollView>
          <Box height={'$12'} />
          <Box height={'$4'} />
      </ImageBackground>
    </View>
  );
};

export default MathsCounting;
