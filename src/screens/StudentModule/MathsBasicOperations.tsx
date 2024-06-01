import {View, ImageBackground, ScrollView, Box,Image, HStack, VStack, Center} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextBold from '../../components/atoms/Text/TextBold';
import MathsBasicAdd from '../../components/molecules/MathsBasicAdd';
import MathsBasicSub from '../../components/molecules/MathsBasicSub';

const BackgroundImage = require('../../assets/images/basic-opt-bg.png');
const BasicOpt = require('../../assets/images/Basic-opt.png');

const MathsBasicOpt = () => {
  return (
    <View height={'$full'}>
        
      <ImageBackground source={BackgroundImage} h="$full">
      
        <Box/>
        <StatusBarStudent text="Maths" bgColor="#FFA360" />
        <Box height={'$6'} />
        <ScrollView>
        <Box  
            paddingHorizontal={'$10'}
            marginRight={'$12'}
            bgColor="#EC8E49"
            height={63}
            padding={'$2'}
            borderRadius={'$2xl'}
            borderWidth={'$1'}
            marginLeft={'$10'}>
              <Center>
            <TextBold
              text="Basic Operations"
              fontSize={'$2xl'}/>
              </Center>
          </Box>

          <Box height={'$4'} />
          <Center>
          <Image source={BasicOpt} alt='BasicOpt' h='$32' w = '$32'/>
          </Center>
          <Box height={'$8'} />
            <HStack>
          <MathsBasicAdd/> 
          </HStack>
          <Box height={'$8'} />   
          <HStack>
          <MathsBasicSub/>
          </HStack>
          <Box height={'$32'}/>

          </ScrollView>
      </ImageBackground>
    </View>
  )
};

export default MathsBasicOpt;
