import { View, ImageBackground, ScrollView, Text } from '@gluestack-ui/themed';
import React from 'react';
import CircleRowScrollView from '../../components/molecules/ChatBoxtop';
import TextBold from '../../components/atoms/Text/TextBold';
import ImageTextBox from '../../components/ChatDialoguebox';
import ChatBox from '../../components/ChatDialoguebox';
import DoctorTop from '../../components/molecules/ChatBoxTopDoctor';
import AdminTop from '../../components/molecules/ChatBoxTopAdmin';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import StatusBarChatAdmin from '../../components/molecules/StatusBarChatAdmin';

const BackgroundImage = require('../../assets/images/admin-bg-profile.png');
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');

const AdminChatbox = () => {
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <StatusBarChatAdmin text='chat support' isSettingsVisible/>
        <ScrollView style={{ paddingHorizontal: 16 }}>

          <AdminTop/>
          {Array.from({length: 1}).map((_, index) => (
            <ChatBox key={index} />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AdminChatbox;
