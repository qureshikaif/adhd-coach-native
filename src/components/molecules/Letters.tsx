import { View, VStack, HStack, Pressable, Box, Image } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';

const Letters = () => {
  const [selectedAlphabet, setSelectedAlphabet] = useState<string | null>(null);

  const alphabetsWithImages: { [key: string]: string }[] = [
    { alphabet: 'A', image: '../assets/images/apple.png' },
    { alphabet: 'B', image: 'url_of_image_for_B' },
    { alphabet: 'C', image: 'url_of_image_for_C' },
    { alphabet: 'D', image: 'url_of_image_for_D' },
    { alphabet: 'E', image: 'url_of_image_for_E' },
    { alphabet: 'F', image: 'url_of_image_for_F' },
    { alphabet: 'G', image: 'url_of_image_for_G' },
    { alphabet: 'H', image: 'url_of_image_for_H' },
    { alphabet: 'I', image: 'url_of_image_for_I' },
    { alphabet: 'J', image: 'url_of_image_for_J' },
    { alphabet: 'K', image: 'url_of_image_for_K' },
    { alphabet: 'L', image: 'url_of_image_for_L' },
    { alphabet: 'M', image: 'url_of_image_for_M' },
    { alphabet: 'N', image: 'url_of_image_for_N' },
    { alphabet: 'O', image: 'url_of_image_for_O' },
    { alphabet: 'P', image: 'url_of_image_for_P' },
    { alphabet: 'Q', image: 'url_of_image_for_Q' },
    { alphabet: 'R', image: 'url_of_image_for_R' },
    { alphabet: 'S', image: 'url_of_image_for_S' },
    { alphabet: 'T', image: 'url_of_image_for_T' },
    { alphabet: 'U', image: 'url_of_image_for_U' },
    { alphabet: 'V', image: 'url_of_image_for_V' },
    { alphabet: 'W', image: 'url_of_image_for_W' },
    { alphabet: 'X', image: 'url_of_image_for_X' },
    { alphabet: 'Y', image: 'url_of_image_for_Y' },
    { alphabet: 'Z', image: 'url_of_image_for_Z' },
  ];

  const handleAlphabetPress = (alphabet: string) => {
    setSelectedAlphabet(alphabet);
  };

  return (
    <View height={'$full'} padding={20}>
      <VStack space="lg">
        <HStack justifyContent="space-between" flexWrap="wrap">
          {alphabetsWithImages.map(({ alphabet, image }) => (
            <Pressable
              key={alphabet}
              bgColor="#DCA2B0"
              height={65}
              padding={10}
              borderRadius={50}
              borderWidth={2}
              width={65}
              alignItems="center"
              justifyContent="center"
              margin={5}
              onPress={() => handleAlphabetPress(alphabet)}
            >
              <TextSemibold text={alphabet} fontSize={'$2xl'} />
            </Pressable>
          ))}
        </HStack>
{/* 
        {selectedAlphabet && (
  <Box
    bgColor="#DCA2B0"
    height={65}
    padding={10}
    borderRadius={50}
    borderWidth={2}
    alignItems="center"
    justifyContent="center"
    marginTop={20}
  >
    <VStack alignItems="center" justifyContent="center">
      <TextSemibold text={`${selectedAlphabet} for `} fontSize={'$2xl'} />
      <Image source={{ uri: alphabetsWithImages.find(obj => obj.alphabet === selectedAlphabet)?.image }} alt='alphabets'/>
    </VStack>
  </Box>
)} */}
      </VStack>
    </View>
  );
};

export default Letters;
