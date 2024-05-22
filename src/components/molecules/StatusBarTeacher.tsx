import {HStack} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';

type StatusBarTeacherProps = {
  text: string;
};

const StatusBarTeacher = ({text}: StatusBarTeacherProps) => {
  return (
    <HStack
      bgColor="#DBC9E1"
      alignItems="center"
      // justifyContent="space-between"
      gap={'$12'}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}>
      <BackButton
        // variant="white"
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      />
      <TextSemibold text={text} fontSize={'$2xl'} color="black" />
    </HStack>
  );
};

export default StatusBarTeacher;
