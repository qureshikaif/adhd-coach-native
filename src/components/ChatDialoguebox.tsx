import {HStack, VStack, Pressable, Box} from '@gluestack-ui/themed';
import React from 'react';
import {User} from 'lucide-react-native';
import TextSemibold from './atoms/Text/TextSemibold';
import TextRegular from './atoms/Text/TextRegular';

interface ChatBoxProps {
  name: string;
  text: string;
  time: string;
  onPress: () => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({name, text, time, onPress}) => {
  return (
    <React.Fragment>
      <Box h="$5" />
      <Pressable
        bg="#F3F4F6"
        android_ripple={{color: 'gray'}}
        onPress={onPress}>
        <VStack
          w="$full"
          // h="$20"
          borderColor="gray"
          rounded={'$2xl'}
          p="$4">
          <HStack justifyContent="space-between" alignItems="center">
            <HStack alignItems="center" space="lg">
              <User color="black" size={32} />
              <TextSemibold text={name} fontSize={'$xl'} />
            </HStack>
            <TextRegular text={time} fontSize={'$sm'} color="#6B7280" />
          </HStack>
        </VStack>
      </Pressable>
    </React.Fragment>
  );
};

export default ChatBox;
