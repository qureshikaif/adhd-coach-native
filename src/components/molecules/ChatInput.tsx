import React from 'react';
import {HStack, Input, InputField, View} from '@gluestack-ui/themed';
import {Camera, Plus, SendHorizonal} from 'lucide-react-native';

const ChatInput = () => {
  return (
    <View>
      <HStack bg="#000000" w="$full" h="$16" p="$4">
        <HStack alignItems="center" space="md">
          <Input
            bgColor="white"
            height={'$11'}
            rounded={'$full'}
            w="$5/6"
            borderWidth={0}>
            <InputField
              type="text"
              fontFamily="Poppins-Regular"
              placeholder="Type to send"
              paddingHorizontal={'$6'}
              placeholderTextColor={'black'}
            />
          </Input>
        </HStack>
        <SendHorizonal size={24} color="white" />
      </HStack>
    </View>
  );
};

export default ChatInput;
