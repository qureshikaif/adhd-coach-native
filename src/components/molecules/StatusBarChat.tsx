import {HStack, Image} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import React from 'react';
import {GapValues} from '../../types/GapValues';
import TextSemibold from '../atoms/Text/TextSemibold';
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');
const ProfilePic = require('../../assets/images//icons/ProfilePicSana.png');
const PhoneIcon = require('../../assets/images/icons/phone.png');
const CallPic = require('../../assets/images/icons/Call.png');

type StatusBarChatProps = {
  text: string;
  isSettingsVisible?: boolean;
  gap?: GapValues;
};

const StatusBarChat = ({text, gap}: StatusBarChatProps) => {
  return (
    <HStack
      bgColor="#A3BACD"
      alignItems="center"
      justifyContent={gap ? 'flex-start' : 'space-between'}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}
      gap={gap ? gap : '$0'}>
      <BackButton
        variant="white"

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

      <HStack alignItems="center" space="lg" justifyContent="space-between">
        <HStack alignItems="center" space="lg" paddingHorizontal={'$4'}>
          <Image source={ProfilePic} alt="Profle Pic" width={40} height={40} />
          <TextSemibold text={text} fontSize={'$2xl'} color="white" />
        </HStack>
        <HStack
          justifyContent="space-between"
          alignItems="baseline"
          h="$4/6"
          space="lg"
          paddingHorizontal={'$4'}>
          <Image source={PhoneIcon} w={'$6'} h={'$6'} alt="Phone Icon" />
        </HStack>
      </HStack>

    </HStack>
  );
};

export default StatusBarChat;
