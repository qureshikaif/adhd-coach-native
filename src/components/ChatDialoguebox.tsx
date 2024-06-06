// ChatBox.js
import {HStack, VStack, Pressable} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from './atoms/Text/TextSemibold';
import TextRegular from './atoms/Text/TextRegular';

interface ChatBoxProps {
  name: string;
  imageSource: any;
  text: string;
  time: string;
  onPress: () => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({name, text, time, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <VStack w="$full" h="$20" borderColor="gray" rounded={'$2xl'} p="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <VStack>
            <TextSemibold text={name} fontSize={'$xl'} />
            <TextRegular text={text} fontSize={'$sm'} />
          </VStack>
          <TextRegular text={time} fontSize={'$sm'} />
        </HStack>
      </VStack>
    </Pressable>
  );
};

export default ChatBox;
