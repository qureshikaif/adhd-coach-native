import React from 'react';
import {Center, Image, Pressable, HStack} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';
import TextSemibold from '../Text/TextSemibold';

const TickIcon = require('../../../assets/images/icons/Tick.png');

interface AddNewButtonProps extends ButtonProps {
  text: string;
}

const UploadButton = ({
  buttonProps,
  imageProps,
  text,
  onPress,
}: AddNewButtonProps) => {
  return (
    <Pressable
  android_ripple={{ color: 'gray' }}
  onPress={onPress}
  {...buttonProps}
  bgColor="#edecd7"
  p={'$1'}
  hardShadow="3"
  softShadow="4"
  
  borderRadius={10}
>
  <HStack justifyContent="space-between" alignItems="center">
    <TextSemibold text={text} fontSize={'$2xl'} />
    <Image
      source={TickIcon}
      alt={text}
      {...imageProps}
      width={50}
      rounded={"$full"}
      height={50}
    />
  </HStack>
</Pressable>

  );
};

export default UploadButton;
