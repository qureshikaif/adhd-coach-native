import React from 'react';
import {Image, Pressable} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const SettingsIcon = require('../../../assets/images/icons/settings-white.png');

type NavigationType = {
  AdminProfileSettings: undefined;
};

const AdminSettingsButton = ({buttonProps, imageProps}: ButtonProps) => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('AdminProfileSettings')}
      {...buttonProps}>
      <Image source={SettingsIcon} alt="Settings Icon" {...imageProps} />
    </Pressable>
  );
};

export default AdminSettingsButton;
