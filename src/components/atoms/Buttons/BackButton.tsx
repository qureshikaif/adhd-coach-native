import React from 'react';
import {Image, Pressable} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';
import {useNavigation} from '@react-navigation/native';

const BackArrow = require('../../../assets/images/BackArrow.png');
const BackArrowWhite = require('../../../assets/images/icons/backarrow-white.png');

const BackButton = ({buttonProps, imageProps, variant}: ButtonProps) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} {...buttonProps}>
      <Image
        source={variant === 'white' ? BackArrowWhite : BackArrow}
        alt="Back Arrow"
        {...imageProps}
      />
    </Pressable>
  );
};

export default BackButton;
