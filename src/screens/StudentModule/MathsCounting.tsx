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
        <StatusBarStudent text="Maths" bgColor="#FFA360" />
        <Box height={'$6'} />
        <Box  
            paddingHorizontal={'$10'}
            marginRight={'$12'}
            bgColor="#FFA360"
            height={70}
            width={'$full'}
            padding={'$2'}
            borderRadius={'$2xl'}
            borderWidth={'$1'}
            marginLeft={'$10'}>
              <Center>
            <TextBold
              text="Counting"
              fontSize={'$2xl'}/>
              </Center>
          </Box>
          <Box height={'$4'} />
        <Image source={MathsImage} alt='MathsImage' h='$56' w = '$full'/>
          <Box height={'$8'} />

          <ScrollView>
          <MathsCount />
          </ScrollView>
          <Box height={'$12'} bgColor='pink'/>
          <Box height={'$8'} />
      </ImageBackground>
    </View>
  );
};

export default MathsCounting;
