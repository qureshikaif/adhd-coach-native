import {HStack} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import TextBold from '../atoms/Text/TextBold';
import React from 'react';
import AdminSettingsButton from '../atoms/Buttons/AdminSettingsButton';

type StatusBarAdminProps = {
  text: string;
  isSettingsVisible: boolean;
};

const StatusBarAdmin = ({text, isSettingsVisible}: StatusBarAdminProps) => {
  return (
    <HStack
      bgColor="#A3BACD"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}>
      <BackButton
        variant="white"
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      />
      <TextBold text={text} fontSize={'$2xl'} color="white" />
      {isSettingsVisible && (
        <AdminSettingsButton
          imageProps={{
            width: 35,
            height: 35,
          }}
        />
      )}
    </HStack>
  );
};

export default StatusBarAdmin;
