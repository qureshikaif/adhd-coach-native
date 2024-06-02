import React from 'react';
import {View, ImageBackground, ScrollView, Box} from '@gluestack-ui/themed';
import ChatBoxNew from '../../components/ChatBoxNew';
import TeacherTop from '../../components/molecules/ChatBoxTopTeacher';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';

const BackgroundImage = require('../../assets/images/TeacherChat.png');

const TeacherChatbox = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Chat" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$8'} />
          <TeacherTop />
          {Array.from({length: 1}).map((_, index) => (
            <ChatBoxNew key={index} />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherChatbox;
