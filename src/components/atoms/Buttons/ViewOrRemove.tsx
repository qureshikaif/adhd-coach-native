import {Pressable, HStack, Image} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../Text/TextSemibold';

const UserIcon = require('../../../assets/images/icons/user.png');
const ExternalIcon = require('../../../assets/images/icons/external.png');
const RemoveIcon = require('../../../assets/images/icons/remove.png');

const ViewOrRemove = () => {
  return (
    <HStack
      alignItems="center"
      bgColor="#D7E6ED"
      p={'$4'}
      softShadow="4"
      rounded={'$3xl'}
      justifyContent="space-between">
      <HStack alignItems="center" space="lg">
        <Image source={UserIcon} alt="User Icon" width={20} height={20} />
        <TextSemibold text="John Doe" fontSize={'$xl'} />
      </HStack>
      <HStack alignItems="center" space="md">
        <Pressable>
          <Image
            source={ExternalIcon}
            alt="External Icon"
            width={35}
            height={35}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable>
          <Image
            source={RemoveIcon}
            alt="Remove Icon"
            width={35}
            height={35}
            resizeMode="contain"
          />
        </Pressable>
      </HStack>
    </HStack>
  );
};

export default ViewOrRemove;