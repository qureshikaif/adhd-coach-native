import {HStack} from '@gluestack-ui/themed';
import React from 'react';
import TextRegular from '../atoms/Text/TextRegular';
import SideBackButton from '../atoms/Buttons/SideBackButton';

type StatusBarParentProps = {
  text: string;
  isSettingsVisible?: boolean;
};

const StatusBarParent = ({text}: StatusBarParentProps) => {
  return (
    <HStack
      bgColor="#DBC9E1"
      alignItems="center"
      //   justifyContent="space-between"
      gap={'$10'}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}>
      <SideBackButton
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      />

      <TextRegular text={text} fontSize={'$2xl'} color="black" />
    </HStack>
  );
};

export default StatusBarParent;
