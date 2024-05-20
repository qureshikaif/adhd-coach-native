import React from 'react';
import {Center, Image, Pressable, VStack} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';
import TextSemibold from '../Text/TextSemibold';

const PlusIcon = require('../../../assets/images/icons/plus-dark.png');

interface AddNewButtonProps extends ButtonProps {
  text: string;
}

const AddNewButton = ({
  buttonProps,
  imageProps,
  text,
  onPress,
}: AddNewButtonProps) => {
  return (
    <Pressable
      android_ripple={{color: 'gray'}}
      onPress={onPress}
      {...buttonProps}
      bgColor="#D7E6ED"
      p={'$5'}
      hardShadow="3"
      softShadow="4"
      rounded={'$lg'}>
      <VStack>
        <Center>
          <TextSemibold text={text} fontSize={'$2xl'} />
          <Image
            source={PlusIcon}
            alt={text}
            {...imageProps}
            width={50}
            height={50}
          />
        </Center>
      </VStack>
    </Pressable>
  );
};

export default AddNewButton;
