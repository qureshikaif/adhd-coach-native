import {Box, HStack} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import AdminSettingsButton from '../atoms/Buttons/AdminSettingsButton';

type StatusBarTeacherProps = {
  text: string;
  isSettingsVisible?: boolean;
};

const StatusBarParent = ({text, isSettingsVisible}: StatusBarTeacherProps) => {
  return (
    <HStack
      bgColor="#DEB5B5"
      alignItems="center"
      justifyContent={'space-between'}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}>
      <BackButton
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      />
      <TextSemibold text={text} fontSize={'$2xl'} color="black" />
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

export default StatusBarParent;
