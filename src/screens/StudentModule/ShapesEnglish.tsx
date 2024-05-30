import {
  View,
  ImageBackground,
  HStack,
  Center,
  Input,
  InputField,
  VStack,
  Box,
  Pressable,
  Image,
} from '@gluestack-ui/themed';

import TextSemibold from '../../components/atoms/Text/TextSemibold';
import React from 'react';


const BackgroundImage = require('../../assets/images/shapes-bg.png');
const Triangle = require('../../assets/images/triangle-red.png');
const CircleCartoon= require('../../assets/images/cartoon-circle.png');
// const LockIcon = require('../../assets/images/icons/Lock.png');
// const PasswordIcon = require('../../assets/images/icons/password.png');
// const RoleIcon = require('../../assets/images/icons/chevron-down.png');



const ShapesEnglish = () => {
  return (
    <View height={'$full'}>
      <ImageBackground
        source={BackgroundImage}
        minHeight={'$full'}
        paddingHorizontal={'$4'}>
        <Center>
          <HStack
            alignItems="center"
            width={'$full'}
            justifyContent="space-between"
            padding={'$4'}>

            <View />
          </HStack>
          {/* <TextRegular fontSize={'$5xl'} text="Welcome" fontStyle="italic" /> */}
          <VStack h={'85%'} justifyContent="center" alignItems="center">
            <Center>

              <Box
                rounded={'$2xl'}
                bgColor="#DEB5B5"
                h={'$40'}
                w={'$40'}
                paddingLeft={16}
                paddingTop={10}>
                <Image
                  source={Triangle}
                  alt="Triangle red"
                  size={'xl'}
                  resizeMode="contain"
                />
              </Box>

              <Box height={'$10'} />
              <VStack width={'$full'} rowGap={'$4'}>
                <Box
                  rounded={'$2xl'}
                  bgColor="#DEB5B5"
                  h={'$11'}
                  w={'$56'}>
                  <HStack justifyContent='center' alignItems='center' space='lg'>
                    <TextSemibold text="Shape: Triangle" fontSize={'$2xl'} />
                  </HStack>
                </Box>
              </VStack>
              <Box height={'$5'} />
              <VStack width={'$full'} rowGap={'$4'}>
                <Box
                  rounded={'$2xl'}
                  bgColor="#DEB5B5"
                  h={'$11'}
                  w={'$56'}>
                  <HStack justifyContent='center' alignItems='center' space='lg'>
                    <TextSemibold text="Color: RED " fontSize={'$2xl'} color='$red600' />
                  </HStack>
                </Box>
              </VStack>

              <Box height={'$10'} />
              <Pressable
                bgColor="#DEB5B5"
                paddingHorizontal={'$8'}
                paddingVertical={'$2'}
                rounded={'$2xl'}>
                <TextSemibold text="Next" fontSize={'$lg'} />
              </Pressable>
              <Box height={'$10'}/>
              <VStack width={'$full'} rowGap={'$4'}>
                <Box
                h={10}>
              <Image source={CircleCartoon} alt='cartoon circle'/>
              </Box>
              </VStack>
            </Center>
          </VStack>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default ShapesEnglish;
