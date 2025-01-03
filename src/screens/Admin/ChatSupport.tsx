import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
} from '@gluestack-ui/themed';
import {StyleSheet, Platform, Keyboard, FlatList} from 'react-native';
import StatusBarChat from '../../components/molecules/StatusBarChat';
import ChatInput from '../../components/molecules/ChatInput';
import {useNavigation} from '@react-navigation/native';
import {tabBarStyle} from '../../navigation/AdminTabs';

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
    sender: 'mom',
    text: 'Will do. Thanks for your support!',
    time: '4:44 pm',
  },
];

const ChatSupport: React.FC = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation.getParent()?.setOptions({tabBarStyle, tabBarVisible: true});
  }, [navigation]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      h={'$full'}
      paddingBottom={keyboardVisible ? '$12' : 0}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <StatusBarChat text="Sana Zehra" />
        <FlatList
          data={messages}
          renderItem={({item}) => (
            <View
              style={[
                styles.messageContainer,
                item.sender === 'teacher'
                  ? styles.teacherMessage
                  : styles.momMessage,
              ]}>
              <Text style={styles.messageText}>{item.text}</Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatContainer}
        />
        <ChatInput />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  chatContainer: {
    padding: 10,
    flexGrow: 1,
    justifyContent: 'flex-end',
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
