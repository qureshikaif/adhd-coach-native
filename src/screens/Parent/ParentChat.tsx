import { View, ImageBackground, ScrollView, Text } from '@gluestack-ui/themed';
import React from 'react';
import CircleRowScrollView from '../../components/molecules/ChatBoxtop';
import TextBold from '../../components/atoms/Text/TextBold';
import ImageTextBox from '../../components/ChatDialoguebox';
import ChatBox from '../../components/ChatDialoguebox';

const BackgroundImage = require('../../assets/images/TeacherProfile.png');
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');

const ParentChatbox = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <ScrollView style={{ paddingHorizontal: 16 }}>
          <TextBold text="Chat" fontSize={32} style={{ padding: 20 }} />
          <CircleRowScrollView />
          {Array.from({length: 1}).map((_, index) => (
            <ChatBox key={index} />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentChatbox;
