import {Box, HStack, Pressable} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import TextBold from '../atoms/Text/TextBold';
import React from 'react';
import {GapValues} from '../../types/GapValues';
import {LogOut} from 'lucide-react-native';
import {handleLogout} from '../../helpers/handleLogout';
import {useStore} from '../../store';

type StatusBarStudentProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
  variant?: 'white' | 'black';
  gap?: GapValues;
  isLogoutVisible?: boolean;
};

const StatusBarStudent = ({
  text,
  gap,
  bgColor,
  textColor,
  variant,
  isLogoutVisible,
}: StatusBarStudentProps) => {
  const store = useStore();
  return (
    <HStack
      bgColor={bgColor ? bgColor : '#D1A973'}
      alignItems="center"
      justifyContent={gap ? 'flex-start' : 'space-between'}
      paddingHorizontal={'$4'}
      paddingVertical={'$3'}
      gap={gap ? gap : '$0'}>
      <BackButton
        variant={variant}
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      />
      <TextBold text={text} fontSize={'$2xl'} color={textColor} />
      {isLogoutVisible ? (
        <Pressable onPress={() => handleLogout(store)}>
          <LogOut size={30} color={'black'} />
        </Pressable>
      ) : (
        <Box w={40} h={'$full'} />
      )}
    </HStack>
  );
};

export default StatusBarStudent;
