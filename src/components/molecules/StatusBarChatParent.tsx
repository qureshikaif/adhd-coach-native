import {HStack, Image} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import React from 'react';
import {GapValues} from '../../types/GapValues';
import TextSemibold from '../atoms/Text/TextSemibold';
import SideBackButton from '../atoms/Buttons/SideBackButton';
import {ChevronLeft} from 'lucide-react-native';
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');
const ProfilePic = require('../../assets/images//icons/ProfilePicSana.png');
const PhoneIcon = require('../../assets/images/icons/phone.png');
const CallPic = require('../../assets/images/icons/call.png');

type StatusBarChatProps = {
  text: string;
  isSettingsVisible?: boolean;
  gap?: GapValues;
};

const StatusBarChatParent = ({text, gap}: StatusBarChatProps) => {
  return (
    <HStack
      bgColor="#E0C4DF"
      alignItems="center"
      justifyContent={gap ? 'flex-start' : 'space-between'}
      paddingHorizontal={'$4'}
      paddingVertical={'$4'}
      gap={gap ? gap : '$0'}>
      <ChevronLeft size={35} color="black" />
      {/* <SideBackButton
        variant="white"
        imageProps={{
          size: 'xs',
        }}
        buttonProps={{}}
      /> */}
      <HStack alignItems="center" space="lg" justifyContent="space-between">
        <HStack alignItems="center" space="lg" paddingHorizontal={'$4'}>
          <Image source={ProfilePic} alt="Profle Pic" width={40} height={40} />
          <TextSemibold text={text} fontSize={'$2xl'} />
        </HStack>
        <HStack
          justifyContent="space-between"
          alignItems="baseline"
          h="$4/6"
          space="lg"
          paddingHorizontal={'$4'}
        />
      </HStack>
    </HStack>
  );
};

export default StatusBarChatParent;
