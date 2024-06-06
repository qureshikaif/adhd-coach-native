import {Box, HStack, Pressable} from '@gluestack-ui/themed';
import React from 'react';
import {GapValues} from '../../types/GapValues';
import TextSemibold from '../atoms/Text/TextSemibold';
import {ChevronLeft, UserCircle} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

type StatusBarChatProps = {
  text: string;
  isSettingsVisible?: boolean;
  gap?: GapValues;
};

const StatusBarChatParent = ({text, gap}: StatusBarChatProps) => {
  const navigation = useNavigation();
  return (
    <HStack
      bgColor="#E0C4DF"
      alignItems="center"
      justifyContent={gap ? 'flex-start' : 'space-between'}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}
      gap={gap ? gap : '$0'}>
      <Pressable onPress={() => navigation.goBack()}>
        <ChevronLeft size={35} color="black" />
      </Pressable>
      <HStack alignItems="center" space="lg" justifyContent="space-between">
        <HStack alignItems="center" space="lg" paddingHorizontal={'$4'}>
          <UserCircle size={40} color="black" />
          <TextSemibold text={text} fontSize={'$2xl'} />
        </HStack>
        <HStack
          justifyContent="space-between"
          alignItems="baseline"
          h="$4/6"
          space="lg"
          paddingHorizontal={'$4'}
        />
      </HStack>
      <Box w={40} h={'$full'} />
    </HStack>
  );
};

export default StatusBarChatParent;
