import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import React from 'react';
import ChatBoxAlternative from '../../components/ChatDialogueboxAlternative';
import DoctorTop from '../../components/molecules/ChatBoxTopDoctor';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';

const BackgroundImage = require('../../assets/images/DoctorChat.png');

const DoctorChatbox = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarDoctor text="Chat" />
        <ScrollView style={{paddingHorizontal: 16}}>
          <Box height={'$4'} />
          <DoctorTop />
          {Array.from({length: 1}).map((_, index) => (
            <ChatBoxAlternative key={index} />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default DoctorChatbox;
