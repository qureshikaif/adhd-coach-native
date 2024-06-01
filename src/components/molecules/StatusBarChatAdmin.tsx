import { HStack } from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import TextRegular from '../atoms/Text/TextRegular';
import React from 'react';

type StatusBarDoctorProps = {
  text: string;
  isSettingsVisible: boolean;
};

const StatusBarChatAdmin = ({ text, isSettingsVisible }: StatusBarDoctorProps) => {
  return (
    <HStack
      width="100%"
      bgColor="#A3BACD"
      alignItems="center"
      gap={"$10"}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}
    >
      <BackButton
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      />
      <TextRegular text={text} fontSize={'$2xl'} color="black" />
    </HStack>
  );
};

export default StatusBarChatAdmin;
