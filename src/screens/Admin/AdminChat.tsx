import {View, ImageBackground, ScrollView} from '@gluestack-ui/themed';
import React from 'react';
import ChatBox from '../../components/ChatDialoguebox';
import AdminTop from '../../components/molecules/ChatBoxTopAdmin';
import StatusBarChatAdmin from '../../components/molecules/StatusBarChatAdmin';

const BackgroundImage = require('../../assets/images/admin-bg-profile.png');

const AdminChat = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarChatAdmin text="Chat support" />
        <ScrollView paddingHorizontal={'$3'}>
          <AdminTop />
          {Array.from({length: 1}).map((_, index) => (
            <ChatBox key={index} />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AdminChat;
