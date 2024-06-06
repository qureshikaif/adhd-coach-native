import io from 'socket.io-client';
import axios from 'axios';
import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  Box,
  HStack,
  Input,
  Pressable,
  View,
  ImageBackground,
  Text,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {tabBarStyle} from '../../navigation/AdminTabs';
import {useStore} from '../../store';
import {InputField} from '@gluestack-ui/themed';
import {SendHorizonal} from 'lucide-react-native';
import {RouteProp} from '@react-navigation/native';
import StatusBarChatTeacher from '../../components/molecules/StatusBarChatTeacher';

const BackgroundImage = require('../../assets/images/TeacherChat.png');

interface Message {
  id: string;
  sender_id: string; // Changed from `sender` to `sender_id`
  text: string;
  time: string;
  message: string;
}

type NavigationType = {
  TeacherChat: {users: any};
};

type RouteType = RouteProp<NavigationType, 'TeacherChat'>;

const TeacherChatOpen = ({route}: {route: RouteType}) => {
  const store = useStore();
  const socket = io('http://13.127.65.203:8080');
  const navigation = useNavigation();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [newMessage, setNewMessage] = React.useState('');
  const {users} = route.params;

  console.log('USERS', users);

  useLayoutEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation.getParent()?.setOptions({tabBarStyle, tabBarVisible: true});
  }, [navigation]);

  useLayoutEffect(() => {
    // Fetch chat history
    axios
      .get(
        `http://13.127.65.203:8080/chat/chat-history/${
          store.user?.user.id_assigned
        }/${users.child_id ? users.child_id : users.id_assigned}`,
      )
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSendMessage = () => {
    axios
      .post('http://13.127.65.203:8080/chat/send-message', {
        sender_id: store.user?.user.id_assigned,
        receiver_id: users.child_id ? users.child_id : users.id_assigned,
        message: newMessage,
      })
      .then(response => {
        setNewMessage('');
        console.log('Message sent', response.data);
      })
      .catch(error => {
        console.error('Error sending message', error);
      });
  };

  const renderItem = ({item}: {item: Message}) => (
    <View
      style={[
        styles.messageContainer,
        item.sender_id === store.user?.user.id_assigned
          ? styles.momMessage
          : styles.teacherMessage,
      ]}>
      <Text style={styles.messageText}>{item.message}</Text>
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
  );

  return (
    <View h="$full">
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarChatTeacher text={users.full_name} />
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
              w="92%"
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
    maxWidth: '75%', // Limit the width of the message container
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

export default TeacherChatOpen;
