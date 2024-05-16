import React from 'react';
import {Image, Pressable} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';
import {useNavigation} from '@react-navigation/native';

const SettingsIcon = require('../../../assets/images/icons/settings-white.png');

const AdminSettingsButton = ({buttonProps, imageProps}: ButtonProps) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} {...buttonProps}>
      <Image source={SettingsIcon} alt="Settings Icon" {...imageProps} />
    </Pressable>
  );
};

export default AdminSettingsButton;
