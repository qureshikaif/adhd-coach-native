import React from 'react';
import {Image, Pressable, HStack} from '@gluestack-ui/themed';
import {ButtonProps} from '../../../types/ButtonProps';
import TextSemibold from '../Text/TextSemibold';
import {Article} from '../../../types/Article';
import {Course} from '../../../types/Course';
import {Student} from '../../../types/Student';

const sideIcon = require('../../../assets/images/icons/side.png');

interface AddNewButtonProps extends ButtonProps {
  text?: string;
  content?: Article | Course | Student;
  isPatient?: boolean;
}

const SideButton = ({
  buttonProps,
  imageProps,
  text,
  onPress,
  content,
  isPatient,
}: AddNewButtonProps) => {
  return (
    <Pressable
      android_ripple={{color: 'gray'}}
      onPress={onPress}
      {...buttonProps}
      bgColor="#EDECD7"
      p={'$1'}
      hardShadow="2"
      softShadow="2"
      borderRadius={15}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        paddingVertical={'$2'}
        paddingHorizontal={'$3'}>
        <TextSemibold
          text={isPatient ? isPatient : text ? text : content?.title}
          fontSize={'$xl'}
        />
        <Image
          source={sideIcon}
          alt={text ? text : content?.title}
          {...imageProps}
          width={30}
          rounded={'$full'}
          height={30}
        />
      </HStack>
    </Pressable>
  );
};

export default SideButton;
