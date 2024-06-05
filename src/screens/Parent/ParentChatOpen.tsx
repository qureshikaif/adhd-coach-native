import React, {useLayoutEffect} from 'react';
import {View, ImageBackground, Text, StyleSheet, FlatList} from 'react-native';
import {Box, HStack, Input, Pressable} from '@gluestack-ui/themed';
import StatusBarChatParent from '../../components/molecules/StatusBarChatParent';
import ChatInput from '../../components/molecules/ChatInput';
import {useNavigation} from '@react-navigation/native';
import {tabBarStyle} from '../../navigation/AdminTabs';
import axios from 'axios';
import io from 'socket.io-client';
import {useStore} from '../../store';
import {InputField} from '@gluestack-ui/themed';
import {SendHorizonal} from 'lucide-react-native';

const BackgroundImage = require('../../assets/images/ParentChatOpen.png');

interface Message {
  id: string;
  sender: string;
  text: string;
  time: string;
}

const ParentChatOpen: React.FC = () => {
  const navigation = useNavigation();
  const store = useStore();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const socket = io('http://192.168.0.107:8080');
  const [newMessage, setNewMessage] = React.useState('');

  useLayoutEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation.getParent()?.setOptions({tabBarStyle, tabBarVisible: true});
  }, [navigation]);
  const renderItem = ({item}: {item: Message}) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'teacher' ? styles.teacherMessage : styles.momMessage,
      ]}>
      <Text style={styles.messageText}>{item.message}</Text>
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
  );

  useLayoutEffect(() => {
    // Fetch chat history
    axios
      .get(`http://192.168.0.107:8080/chat/chat-history/${201}/${101}`)
      .then(response => {
        console.log(response.data);
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching chat history', error);
      });

    socket.on('receiveMessage', (newMessage: Message) => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    // Cleanup
    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const handleSendMessage = () => {
    axios
      .post('http://192.168.0.107:8080/chat/send-message', {
        sender_id: 201, // replace with the actual senderId
        receiver_id: 101, // replace with the actual receiverId
        message: newMessage,
      })
      .then(response => {
        setNewMessage('');
      })
      .catch(error => {
        console.error('Error sending message', error);
      });
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={BackgroundImage} style={{flex: 1}}>
        <StatusBarChatParent text="Sana Zehra" />
        <Box height={8} />
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatContainer}
        />
        <HStack bg="#000000" w="$full" h="$16" p="$4">
          <HStack alignItems="center" space="md">
            <Input
              bgColor="white"
              height={'$11'}
              rounded={'$full'}
              w="$5/6"
              borderWidth={0}>
              <InputField
                value={newMessage}
                onChangeText={setNewMessage}
                type="text"
                fontFamily="Poppins-Regular"
                placeholder="Type to send"
                paddingHorizontal={'$6'}
                placeholderTextColor={'black'}
              />
            </Input>
          </HStack>
          <Pressable onPress={handleSendMessage}>
            <SendHorizonal size={24} color="white" />
          </Pressable>
        </HStack>
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

export default ParentChatOpen;
