import {Box, HStack} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import TextBold from '../atoms/Text/TextBold';
import React from 'react';
import AdminSettingsButton from '../atoms/Buttons/AdminSettingsButton';
import {GapValues} from '../../types/GapValues';

type StatusBarAdminProps = {
  text: string;
  isSettingsVisible?: boolean;
  gap?: GapValues;
};

const StatusBarAdmin = ({
  text,
  isSettingsVisible,
  gap,
}: StatusBarAdminProps) => {
  return (
    <HStack
      bgColor="#A3BACD"
      alignItems="center"
      justifyContent={gap ? 'flex-start' : 'space-between'}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}
      gap={gap ? gap : '$0'}>
      <BackButton
        variant="white"
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      />
      <TextBold text={text} fontSize={'$2xl'} color="white" />
      {isSettingsVisible ? (
        <AdminSettingsButton
          imageProps={{
            width: 35,
            height: 35,
          }}
        />
      ) : (
        <Box w={40} h={'$full'} />
      )}
    </HStack>
  );
};

export default StatusBarAdmin;
