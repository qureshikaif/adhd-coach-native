import {HStack, Image, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';

const SideIcon = require('../../assets/images/icons/side.png');
const MsgIcon = require('../../assets/images/icons/grp-msg.png');

const ViewAllMsg = () => {
  return (
    <View>
      <VStack
        bg="#C0D9E5"
        w="$full"
        h="$16"
        borderColor="gray"
        borderWidth={0.5}
        rounded={'$2xl'}
        hardShadow="5"
        p="$4">
        <HStack alignItems="center" space="lg" justifyContent="space-between">
          <HStack alignItems="center" space="lg">
            <Image source={MsgIcon} alt="User Icon" width={20} height={20} />
            <TextSemibold text="View All Messages" fontSize={'$xl'} />
          </HStack>
          <HStack justifyContent="space-between" alignItems="baseline" h="$4/6">
            <Image source={SideIcon} w={'$5'} h={'$5'} alt="sidebutton" />
          </HStack>
        </HStack>
      </VStack>
    </View>
  );
};

export default ViewAllMsg;
