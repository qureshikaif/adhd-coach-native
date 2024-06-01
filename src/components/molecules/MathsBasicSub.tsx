import {View, ImageBackground, ScrollView, Box,Image, HStack, VStack, Center} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import TextBold from '../../components/atoms/Text/TextBold';

const BasicOpt = require('../../assets/images/Basic-opt.png');
const HappyKidd = require('../../assets/images/happyyKid.png');
const MathsBasicSub = () => {
  return (
    <View height={'$full'}>

        
        <Center> 
            <Image source={HappyKidd} alt='HappyyKid' h='$32' w = '$32'/>
            </Center>
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
              text="Subtraction"
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
              text="5 - 0 = 5"
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
              text="5 - 1 = 4"
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
              text="4 - 1 = 3"
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
              text="3 - 1 = 2"
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
              text="2 - 1 = 1"
              fontSize={'$2xl'}/>
              </Center>
          </Box>
          
          <Box height={'$4'} />
              
    </View>
  );
};

export default MathsBasicSub;
