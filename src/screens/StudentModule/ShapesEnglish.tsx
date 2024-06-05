import React, { useState } from 'react';
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

import TextSemibold from '../../components/atoms/Text/TextSemibold';

const BackgroundImage = require('../../assets/images/shapes-bg.png');
const shapes = [
  {
    name: 'Triangle',
    color: 'RED',
    image: require('../../assets/images/triangle-red.png'),
  },
  {
    name: 'Circle',
    color: 'GREY',
    image: require('../../assets/images/circle-gray.png'),
  },
  {
    name: 'Square',
    color: 'BLUE',
    image: require('../../assets/images/square-blue.png'),
  },
  {
    name: 'Rhombus',
    color: 'YELLOW',
    image: require('../../assets/images/rhombus-yellow.png'),
  },
  {
    name: 'Hexogon',
    color: 'GREEN',
    image: require('../../assets/images/hexagon-green.png'),
  },
];

const ShapesEnglish = () => {
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);

  const handleNextShape = () => {
    setCurrentShapeIndex((prevIndex) =>
      prevIndex === shapes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentShape = shapes[currentShapeIndex];

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
              <TextSemibold
                text="Hello! What is my name and what color am I?"
                fontSize={'$2xl'}
                padding={'$1'}
              />
              <Box
                rounded={'$2xl'}
                bgColor="#DEB5B5"
                h={'$40'}
                w={'$40'}
                paddingLeft={16}
                paddingRight={8} // Add paddingRight here
                paddingTop={10}>
                <Image
                  source={currentShape.image}
                  alt={currentShape.name}
                  size={'full'}
                  resizeMode="contain"
                />
              </Box>

              <Box height={'$10'} />
              <VStack width={'$full'} rowGap={'$4'}>
                <Box rounded={'$2xl'} bgColor="#DEB5B5" h={'$12'} w={'$56'}>
                  <HStack
                    justifyContent="center"
                    alignItems="center"
                    space="lg">
                    <TextSemibold
                      text={`Shape: ${currentShape.name}`}
                      fontSize={'$2xl'}
                      padding={'$1'}
                    />
                  </HStack>
                </Box>
              </VStack>
              <Box height={'$5'} />
              <VStack width={'$full'} rowGap={'$4'}>
                <Box rounded={'$2xl'} bgColor="#DEB5B5" h={'$12'} w={'$56'}>
                  <HStack
                    justifyContent="center"
                    alignItems="center"
                    space="lg">
                    <TextSemibold
                      text="Color:"
                      fontSize={'$2xl'}
                      color="$black"
                      padding={'$1'}
                    />
                    <TextSemibold
                      text={currentShape.color}
                      fontSize={'$2xl'}
                      color={`$${currentShape.color.toLowerCase()}`}
                      padding={'$1'}
                    />
                  </HStack>
                </Box>
              </VStack>

              <Box height={'$10'} />
              <Pressable
                onPress={handleNextShape}
                bgColor="#DEB5B5"
                paddingHorizontal={'$8'}
                paddingVertical={'$2'}
                rounded={'$2xl'}>
                <TextSemibold text="Next" fontSize={'$lg'} />
              </Pressable>
            </Center>
          </VStack>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default ShapesEnglish;
