import React from 'react';
import { View, ImageBackground, Text, StyleSheet, FlatList } from 'react-native';
import { Box } from '@gluestack-ui/themed';
import StatusBarChatDoctor from '../../components/molecules/StatusBarChat';
import ChatBoxBottom from '../../components/ChatDialogueboxAlternative';
import ChatInput from '../../components/molecules/ChatInput';

const BackgroundImage = require('../../assets/images/DoctorChatOpen.png');

interface Message {
  id: string;
  sender: string;
  text: string;
  time: string;
}

const messages: Message[] = [
  {
    id: '1',
    sender: 'mom',
    text: 'Good Afternoon!  Ms. Sana,  this is Ali’s mom. I hope you re doing well.',
    time: '4:34 pm',
  },
  {
    id: '2',
    sender: 'mom',
    text: ' I want to discuss my childs progress. How are they doing in your class?',
    time: '4:35 pm',
  },
  {
    id: '3',
    sender: 'teacher',
    text: 'Hello Mrs. Ahmed, I’m glad you reached out. Ali has been doing quite well overall. We’ve been working on strategies to help them stay focused and organized.',
    time: '4:42 pm',
  },
  {
    id: '4',
    sender: 'mom',
    text: 'Thanks for the update. Are there any areas they’re excelling in or struggling with?',
    time: '4:43 pm',
  },
  {
    id: '5',
    sender: 'teacher',
    text: 'They’re doing well in activities like Rock Paper Scissors. However, they struggle more with recognizing tasks like shape recognition. Make sure he does practice exercises.',
    time: '4:44 pm',
  },
 
];

const DoctorChatBoxOpen: React.FC = () => {

  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'teacher' ? styles.teacherMessage : styles.momMessage,
      ]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={BackgroundImage} style={{ flex: 1 }}>
        <StatusBarChatDoctor text="Sana Zehra" isSettingsVisible />
        <Box height={8} />
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatContainer}
        />
        <ChatInput/>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  teacherMessage: {
    backgroundColor: '#AEA3B4',
    alignSelf: 'flex-start',
  },
  momMessage: {
    backgroundColor: '#CEA4CC',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
    textAlign: 'right',
  },
});

export default DoctorChatBoxOpen;
