import React from 'react';
import {Image, Pressable} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';
import {useNavigation} from '@react-navigation/native';


const SideBackArrow = require('../../../assets/images/icons/side.png');

const SideBackButton = ({buttonProps, imageProps, variant}: ButtonProps) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} {...buttonProps}>
      <Image
        source={SideBackArrow}
        alt=" Side Back Arrow"
        {...imageProps}
      />
    </Pressable>
  );
};

export default SideBackButton;