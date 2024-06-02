import {View, ImageBackground, ScrollView} from '@gluestack-ui/themed';
import React from 'react';
import CircleRowScrollView from '../../components/molecules/ChatBoxtop';
import ChatBox from '../../components/ChatDialoguebox';
import StatusBarParent from '../../components/molecules/StatusBarParent';

const BackgroundImage = require('../../assets/images/TeacherProfile.png');

const ParentChat = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarParent text="Chat" />
        <ScrollView paddingHorizontal={'$4'}>
          <CircleRowScrollView />
          {Array.from({length: 1}).map((_, index) => (
            <ChatBox key={index} />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentChat;
