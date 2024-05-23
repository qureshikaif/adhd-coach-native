import {HStack} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import TextBold from '../atoms/Text/TextBold';
import React from 'react';
import AdminSettingsButton from '../atoms/Buttons/AdminSettingsButton';
import TextRegular from '../atoms/Text/TextRegular';
import SideBackButton from '../atoms/Buttons/SideBackButton';

type StatusBarParentProps = {
  text: string;
  isSettingsVisible: boolean;
};

const StatusBarParent= ({text, isSettingsVisible}: StatusBarParentProps) => {
  return (
    <HStack
      bgColor="#DBC9E1"
      alignItems="center"
    //   justifyContent="space-between"
    gap={"$10"}
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
