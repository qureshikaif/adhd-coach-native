import {HStack, Image, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import TextRegular from '../atoms/Text/TextRegular';

const DropIcon = require('../../assets/images/icons/chevron-down.png');
const UserIcon = require('../../assets/images/icons/user.png');

const ChatSupport2 = () => {
  return (
    <View>
      <VStack
        bg="#D7E6ED"
        w="$full"
        h="$40"
        borderColor="gray"
        borderWidth={0.5}
        rounded={'$2xl'}
        hardShadow="5"
        p="$2">
        <HStack alignItems="center" space="lg" justifyContent="space-between">
          <HStack alignItems="center" space="lg">
            <Image source={UserIcon} alt="User Icon" width={20} height={20} />
            <TextRegular text="Ahmed Suhaib" fontSize={'$xl'} />
          </HStack>
          <HStack justifyContent="space-between" alignItems="baseline" h="$4/6">
            <Image source={DropIcon} w={'$5'} h={'$5'} alt="sidebutton" />
          </HStack>
        </HStack>
        <VStack>
          <TextSemibold text="Time: 3:45pm" fontSize={'$sm'} />
          <TextSemibold text="Message:" fontSize={'$sm'} />
          <HStack>
            <TextRegular
              text="Beneath the sprawling canopy of the ancient forest, the world felt both timeless and alive. "
              fontSize={'$sm'}
            />
          </HStack>
        </VStack>
      </VStack>
    </View>
  );
};

export default ChatSupport2;
