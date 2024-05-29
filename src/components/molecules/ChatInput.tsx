import React from 'react';
import {HStack, Image, Input, InputField, View} from '@gluestack-ui/themed';

// const MicIcon = require('../../assets/images/icons/mic.png');
const CameraIcon = require('../../assets/images/icons/camera.png');
const PlusIcon = require('../../assets/images/icons/plus-white.png');

const ChatInput = () => {
  return (
    <View>
      <HStack bg="#000000" w="$full" h="$16" p="$4">
        <HStack alignItems="center" space="lg">
          <Image source={PlusIcon} alt="Attach Icon" width={20} height={20} />
          <Input
            bgColor="white"
            height={'$12'}
            rounded={'$2xl'}
            w="$5/6"
            borderWidth={0}>
            <InputField
              type="text"
              fontFamily="Poppins-Regular"
              placeholder="Send Message"
              paddingHorizontal={'$6'}
              placeholderTextColor={'black'}
            />
          </Input>
        </HStack>
        <Image source={CameraIcon} w={'$7'} h={'$7'} alt="sidebutton" />
      </HStack>
    </View>
  );
};

export default ChatInput;
