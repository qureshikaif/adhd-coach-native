import { View, ImageBackground, ScrollView, Text } from '@gluestack-ui/themed';
import React from 'react';
import CircleRowScrollView from '../../components/molecules/ChatBoxtop';
import TextBold from '../../components/atoms/Text/TextBold';
import ImageTextBox from '../../components/ChatDialoguebox';
import ChatBoxAlternative from '../../components/ChatDialogueboxAlternative';
import DoctorTop from '../../components/molecules/ChatBoxTopDoctor';

const BackgroundImage = require('../../assets/images/DoctorChat.png');
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');

const DoctorChatbox = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <ScrollView style={{ paddingHorizontal: 16 }}>
          <TextBold text="Chat" fontSize={32} style={{ padding: 20 }} />
          <DoctorTop/>
          {Array.from({length: 1}).map((_, index) => (
            <ChatBoxAlternative key={index} />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default DoctorChatbox;
