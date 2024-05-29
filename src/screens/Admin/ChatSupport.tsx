import {ImageBackground} from '@gluestack-ui/themed';
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import StatusBarChat from '../../components/molecules/StatusBarChat';
import ChatInput from '../../components/molecules/ChatInput';

const BackgroundImage = require('../../assets/images/admin-content-bg.png');

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
    text: 'Good Afternoon! Ms. Sana, this is Ali’s mom. I hope you’re doing well.',
    time: '4:34 pm',
  },
  {
    id: '2',
    sender: 'mom',
    text: 'I want to discuss my child’s progress. How are they doing in your class?',
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
  {
    id: '6',
    sender: 'mom',
    text: 'Will do. Thanks for your support!',
    time: '4:44 pm',
  },
  {
    id: '7',
    sender: 'teacher',
    text: 'Of course, we’re here to help Ali succeed!',
    time: '4:45 pm',
  },
];

const ChatSupport: React.FC = () => {
  const renderItem = ({item}: {item: Message}) => (
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
    <ImageBackground source={BackgroundImage} minHeight={'$full'}>
      <StatusBarChat text="Sana Zehra" />
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatContainer}
      />
      <ChatInput />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    padding: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
  },
  teacherMessage: {
    backgroundColor: '#A3BACD',
    alignSelf: 'flex-start',
  },
  momMessage: {
    backgroundColor: '#A3BACD',
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

export default ChatSupport;
