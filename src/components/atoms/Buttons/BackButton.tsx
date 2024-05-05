import React from 'react';
import {Image, Pressable} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';

const BackArrow = require('../../../assets/images/BackArrow.png');

const BackButton = ({onPress, buttonProps, imageProps}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} {...buttonProps}>
      <Image source={BackArrow} alt="Back Arrow" {...imageProps} />
    </Pressable>
  );
};

export default BackButton;
