import React from 'react';
import {Image, Pressable, HStack} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';
import TextSemibold from '../Text/TextSemibold';

const sideIcon = require('../../../assets/images/icons/side.png');

interface AddNewButtonProps extends ButtonProps {
  text: string;
}

const SideScreenButton = ({
  buttonProps,
  imageProps,
  text,
  onPress,
}: AddNewButtonProps) => {
  return (
    <Pressable
      android_ripple={{color: 'gray'}}
      onPress={onPress}
      {...buttonProps}
      bgColor="#EDECD7"
      p={'$3'}
      hardShadow="3"
      softShadow="4"
      borderRadius={10}>
      <HStack justifyContent="space-between" alignItems="center">
        <TextSemibold text={text} fontSize={'$xl'} />
        <Image
          source={sideIcon}
          alt={text}
          {...imageProps}
          width={30}
          rounded={'$full'}
          height={30}
        />
      </HStack>
    </Pressable>
  );
};

export default SideScreenButton;
