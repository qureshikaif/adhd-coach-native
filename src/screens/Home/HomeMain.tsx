import React from 'react';
import {
  Button,
  HStack,
  Image,
  ImageBackground,
  VStack,
} from '@gluestack-ui/themed';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import TextRegular from '../../components/atoms/Text/TextRegular';

const HomeImage = require('../../assets/images/home.png');
const Avatar = require('../../assets/images/avatars/home.png');
const HomeBackground = require('../../assets/images/home-bg.png');

const HomeMain = () => {
  return (
    <ImageBackground minHeight={'$full'} source={HomeBackground}>
      <VStack height={'$full'} alignItems="center">
        <Image
          source={HomeImage}
          alt="Home Main Image"
          w={'$full'}
          h={'$1/3'}
        />
        <HStack paddingTop={'$2'}>
          <TextBold text="A" color="#EB7E30" fontSize={'$3xl'} />
          <TextBold text="D" color="#FF5555" fontSize={'$3xl'} />
          <TextBold text="H" color="#EFA90F" fontSize={'$3xl'} />
          <TextBold text="D" color="#FE5E5B" fontSize={'$3xl'} />

          <TextBold text=" COACH" fontSize={'$3xl'} />
        </HStack>
        <TextSemibold text="Welcome" fontSize={'$2xl'} />
        <Image source={Avatar} alt="Avatar" resizeMode="contain" size="lg" />
        <TextRegular
          text="Your Ultimate guide to cure everyday ADHD problems"
          textAlign="center"
          paddingHorizontal={'$12'}
          fontSize={'$sm'}
          paddingVertical={'$4'}
        />
        <VStack alignItems="center">
          <HStack space="lg">
            <Button
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg="white"
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Log In" />
            </Button>
            <Button
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg="#FFB579"
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Sign Up" />
            </Button>
          </HStack>
          <TextBold text="OR" fontSize={'$2xl'} />
          <Button
            hardShadow="5"
            size="xl"
            borderColor="black"
            bg="#F9DEDE"
            borderWidth={1}
            borderRadius={'$lg'}
            paddingHorizontal={'$12'}>
            <TextSemibold text="Take Assessment" color="#E07234" />
          </Button>
        </VStack>
      </VStack>
    </ImageBackground>
  );
};

export default HomeMain;
