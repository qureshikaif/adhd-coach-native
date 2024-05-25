import {Center, HStack, Image, View, VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../atoms/Text/TextSemibold';
import TextRegular from '../atoms/Text/TextRegular';

const SideIcon = require('../../assets/images/icons/side.png');
// const StarHollow = require('../../assets/images/icons/star-dark.png');
const UserIcon = require('../../assets/images/icons/user.png');

const ChatSupport1 = () => {
  return (
    <View>
      {/* <TextSemibold text="Recent Feedbacks" fontSize={'$xl'} pb={'$2'} /> */}
      <VStack
        bg="#D7E6ED"
        w="$full"
        h="$16"
        borderColor="gray"
        borderWidth={0.5}
        rounded={'$2xl'}
        hardShadow="5"
        p="$4">
        
          <HStack alignItems="center" space="lg">
          <Image source={UserIcon} alt="User Icon" width={20} height={20} />
          <TextRegular text="Kaif Qureshi" fontSize={'$xl'}/>
          <HStack justifyContent="space-between" alignItems="baseline" h="$4/6">
            <Image source={SideIcon} w={'$5'} h={'$5'} alt="sidebutton"/>
        
            {/* <Image source={StarHollow} w={'$6'} h={'$6'} alt="Star Icon" /> */}
          </HStack>
          </HStack>
       
      </VStack>
    </View>
  );
};

export default ChatSupport1;
