import {View, ImageBackground, ScrollView, Box,Image, HStack, VStack, Center} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarStudent from './StatusBarStudent';
import TextBold from '../atoms/Text/TextBold';

const BasicOpt = require('../../assets/images/Basic-opt.png');

const MathsBasicAdd = () => {
  return (
    <View height={'$full'}>

        <Box height={'$2'} />
        <Box  
            paddingHorizontal={'$10'}
            marginRight={'$20'}
            bgColor="#FFA360"
            height={50}
            padding={'$1'}
            borderRadius={'$2xl'}
            borderWidth={'$1'}
            marginLeft={'$20'}>
              <Center>
            <TextBold
              text="Addition"
              fontSize={'$2xl'}/>
              </Center>
          </Box>
          <Box height={'$4'} />

          <Box  
            paddingHorizontal={'$10'}
            marginRight={'$32'}
            bgColor="#FFB782"
            height={60}
            padding={'$2'}
            borderRadius={'$2xl'}
            borderWidth={'$1'}
            marginLeft={'$32'}>
              <Center>
            <TextBold
              text="1 + 0 = 1"
              fontSize={'$2xl'}/>
              </Center>
          </Box>
          <Box height={'$4'} />

          <Box  
            paddingHorizontal={'$10'}
            marginRight={'$32'}
            bgColor="#FFB782"
            height={60}
            padding={'$2'}
            borderRadius={'$2xl'}
            borderWidth={'$1'}
            marginLeft={'$32'}>
              <Center>
            <TextBold
              text="1 + 1 = 2"
              fontSize={'$2xl'}/>
              </Center>
          </Box>
          <Box height={'$4'} />

          <Box  
            paddingHorizontal={'$10'}
            marginRight={'$32'}
            bgColor="#FFB782"
            height={60}
            padding={'$2'}
            borderRadius={'$2xl'}
            borderWidth={'$1'}
            marginLeft={'$32'}>
              <Center>
            <TextBold
              text="1 + 2 = 3"
              fontSize={'$2xl'}/>
              </Center>
          </Box>
          <Box height={'$4'} />

          <Box  
            paddingHorizontal={'$10'}
            marginRight={'$32'}
            bgColor="#FFB782"
            height={60}
            padding={'$2'}
            borderRadius={'$2xl'}
            borderWidth={'$1'}
            marginLeft={'$32'}>
              <Center>
            <TextBold
              text="1 + 3 = 4"
              fontSize={'$2xl'}/>
              </Center>
          </Box>
          <Box height={'$4'} />

          <Box  
            paddingHorizontal={'$10'}
            marginRight={'$32'}
            bgColor="#FFB782"
            height={60}
            padding={'$2'}
            borderRadius={'$2xl'}
            borderWidth={'$1'}
            marginLeft={'$32'}>
              <Center>
            <TextBold
              text="1 + 4 = 5"
              fontSize={'$2xl'}/>
              </Center>
          </Box>
          
          <Box height={'$4'} />
              
    </View>
  );
};

export default MathsBasicAdd;
