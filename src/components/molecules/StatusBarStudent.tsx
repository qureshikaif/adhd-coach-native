import {Box, HStack} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import TextBold from '../atoms/Text/TextBold';
import React from 'react';
import {GapValues} from '../../types/GapValues';

type StatusBarStudentProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
  variant?: 'white' | 'black';
  gap?: GapValues;
};

const StatusBarStudent = ({
  text,
  gap,
  bgColor,
  textColor,
  variant,
}: StatusBarStudentProps) => {
  return (
    <HStack
      bgColor={bgColor ? bgColor : '#D1A973'}
      alignItems="center"
      justifyContent={gap ? 'flex-start' : 'space-between'}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}
      gap={gap ? gap : '$0'}>
      <BackButton
        variant={variant}
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      />
      <TextBold text={text} fontSize={'$2xl'} color={textColor} />
      <Box w={40} h={'$full'} />
    </HStack>
  );
};

export default StatusBarStudent;
