import React from 'react';
import { HStack, Image } from '@gluestack-ui/themed';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import SideBackButton from '../atoms/Buttons/SideBackButton';
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');
const CallPic = require('../../assets/images/icons/call.png');

type StatusBarTeacherProps = {
  text: string;
  isSettingsVisible?: boolean;
};

const StatusBarChat = ({ text }: StatusBarTeacherProps) => {
  return (
    <HStack
      bgColor="#DBC9E1"
      alignItems="center"
      gap={'$5'}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}>
       
      <SideBackButton
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      />

      <Image
        source={TeacherPic} 
        width={24}
        height={24}
        borderRadius={12} 
      />

      {/* Text */}
      <TextSemibold text={text} fontSize={'$2xl'} color="black" />
      
      {/* Call icon */}
      <Image
        source={CallPic} 
        width={24}
        height={24}
        borderRadius={12} 
       
      />
    </HStack>
  );
};

export default StatusBarChat;
