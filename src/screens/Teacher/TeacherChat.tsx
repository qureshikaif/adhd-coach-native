import { View, ImageBackground, ScrollView, Text } from '@gluestack-ui/themed';
import React from 'react';

import TextBold from '../../components/atoms/Text/TextBold';

import ChatBoxNew from '../../components/ChatBoxNew';
import TeacherTop from '../../components/molecules/ChatBoxTopTeacher';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';

const BackgroundImage = require('../../assets/images/TeacherChat.png');


const TeacherChatbox = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <StatusBarTeacher text='Chat'/>
        <ScrollView style={{ paddingHorizontal: 16 }}>
          <TextBold text="Chat" fontSize={32} style={{ padding: 20 }} />
          <TeacherTop/>
          {Array.from({length: 1}).map((_, index) => (
            <ChatBoxNew key={index} />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherChatbox;
