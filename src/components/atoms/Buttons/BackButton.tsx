import {Image, Pressable} from '@gluestack-ui/themed';
import React from 'react';
import {ButtonProps} from '../../../types/ButtonProps';

const BackArrow = require('../../../assets/images/BackArrow.png');

const BackButton = ({onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={BackArrow} alt="Back Arrow" width={50} height={50} />
    </Pressable>
  );
};

export default BackButton;
