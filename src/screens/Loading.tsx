import {VStack, Spinner, ImageBackground} from '@gluestack-ui/themed';
import React from 'react';
import {ImageSourcePropType} from 'react-native';

type LoadingProps = {
  bg?: string;
  bgImage?: ImageSourcePropType;
};

const Loading = ({bg, bgImage}: LoadingProps) => {
  return (
    <ImageBackground source={bgImage} minHeight={'$full'}>
      <VStack
        bg={bg ? bg : 'transparent'}
        h="$full"
        alignItems="center"
        justifyContent="center">
        <Spinner size="large" />
      </VStack>
    </ImageBackground>
  );
};

export default Loading;
