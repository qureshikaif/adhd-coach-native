import {Box, HStack, Image} from '@gluestack-ui/themed';
import BackButton from '../atoms/Buttons/BackButton';
import TextBold from '../atoms/Text/TextBold';
import React from 'react';
import AdminSettingsButton from '../atoms/Buttons/AdminSettingsButton';
import {GapValues} from '../../types/GapValues';
import TextSemibold from '../atoms/Text/TextSemibold';

const ProfilePic= require('../../assets/images//icons/ProfilePicSana.png')
const PhoneIcon= require('../../assets/images/icons/phone.png')
type StatusBarChatProps = {
  text: string;
  isSettingsVisible?: boolean;
  gap?: GapValues;
};
const StatusBarChat = ({
  text,
  isSettingsVisible,
  gap,
}: StatusBarChatProps) => {
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
      <HStack alignItems="center" space="lg" justifyContent="space-between" >
      <HStack alignItems="center" space="lg" paddingHorizontal={'$4'}>
      <Image source={ProfilePic} alt="Profle Pic" width={40} height={40} />         
      <TextSemibold text={text} fontSize={'$2xl'} color="white" />
      </HStack>
      <HStack justifyContent="space-between" alignItems="baseline" h="$4/6" space='lg' paddingHorizontal={'$4'}>
            <Image source={PhoneIcon} w={'$5'} h={'$5'} alt="Phone Icon" />
          </HStack>
          </HStack>
      {isSettingsVisible ? (
        <AdminSettingsButton
          imageProps={{
            width: 35,
            height: 35,
          }}
        />
      ) : (
        <Box w={40} h={'$full'} />
      )}
    </HStack>
  );
};

export default StatusBarChat;
