import React from 'react';
import {Image, Pressable, HStack} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';
import TextSemibold from '../Text/TextSemibold';

const sideIcon = require('../../../assets/images/icons/side.png');

interface AddNewButtonProps extends ButtonProps {
  text: string;
}

const SideButton = ({
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
      p={'$1'}
      hardShadow="2"
      softShadow="2"
      borderRadius={15}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        paddingVertical={'$2'}
        paddingHorizontal={'$3'}>
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

export default SideButton;
