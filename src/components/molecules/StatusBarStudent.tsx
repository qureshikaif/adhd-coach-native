import {Box, HStack} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import TextBold from '../atoms/Text/TextBold';
import React from 'react';
import {GapValues} from '../../types/GapValues';

type StatusBarStudentProps = {
  text: string;
  gap?: GapValues;
};

const StatusBarStudent = ({text, gap}: StatusBarStudentProps) => {
  return (
    <HStack
      bgColor="#D1A973"
      alignItems="center"
      justifyContent={gap ? 'flex-start' : 'space-between'}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}
      gap={gap ? gap : '$0'}>
      <BackButton
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      />
      <TextBold text={text} fontSize={'$2xl'} />
      <Box w={40} h={'$full'} />
    </HStack>
  );
};

export default StatusBarStudent;
