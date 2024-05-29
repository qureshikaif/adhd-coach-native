import React from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Box, HStack } from '@gluestack-ui/themed';
import StatusBarChat from '../../components/molecules/StatusBarChat';

const BackgroundImage = require('../../assets/images/doctor-bg.png');
const LeftImage = require('../../assets/images/icons/Gallery.png');
const RightImage1 = require('../../assets/images/icons/Mic.png');
const RightImage2 = require('../../assets/images/icons/Camera.png');

const ChatBox: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBarChat text="Sana" isSettingsVisible={true} />
      <ImageBackground source={BackgroundImage} style={{ flex: 1 }}>
        <Box height={8} />
        <ScrollView style={{ paddingHorizontal: 16 }}>
          {/* Chat messages go here */}
        </ScrollView>
        <HStack alignItems="center" padding={4} space={'sm'}>
          <Image source={LeftImage} style={{ width: 40, height: 40, borderRadius: 20 }} />
          <TextInput
            style={{
              flex: 1,
              height: 40,
              borderColor: '#ccc',
              borderWidth: 1,
              borderRadius: 20,
              paddingHorizontal: 16,
              marginRight: 8,
            }}
            placeholder="Type a message"
          />
          <TouchableOpacity>
            <Text style={{ color: '#007AFF', fontSize: 16 }}>Send</Text>
          </TouchableOpacity>
          <Image source={RightImage1} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 8 }} />
          <Image source={RightImage2} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 8 }} />
        </HStack>
      </ImageBackground>
    </View>
  );
};

export default ChatBox;
