import {
    View,
    ImageBackground,
    HStack,
    Center,
    VStack,
    Box,
    Pressable,
    Image,
  } from '@gluestack-ui/themed';
  import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
  
  
  const BackgroundImage = require('../../assets/images/shapes-bg.png');
  const ShapesKid = require('../../assets/images/kids-shapes.png');
  const CircleCartoon= require('../../assets/images/cartoon-circle.png');
  
  const ShapesStart = () => {
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
            <VStack h={'85%'} justifyContent="center" alignItems="center">
              <Center>
                <Box height={'$32'}/>
                <Box
                  rounded={'$2xl'}
                  h={'$40'}
                  w={'$40'}
                  paddingLeft={16}
                  paddingTop={10}>
                  <Image
                    source={ShapesKid}
                    alt="Triangle red"
                    size={'full'}
                    resizeMode="cover"
                  />
                </Box>
  
        
                <Box height={'$10'} />
                <Pressable
                  bgColor="#DEB5B5"
                  paddingHorizontal={'$8'}
                  paddingVertical={'$2'}
                  rounded={'$2xl'}>
                  <TextBold text="START" fontSize={'$lg'} />
                </Pressable>
                <Box height={'$32'}/>
                <VStack width={'$full'} rowGap={'$4'}>
                  <Box
                  h={10}>
                {/*<Image source={CircleCartoon} alt='cartoon circle'/>*/}
                </Box>
                </VStack>
              </Center>
            </VStack>
          </Center>
        </ImageBackground>
      </View>
    );
  };
  
  export default ShapesStart;
  