import {
  View,
  ImageBackground,
  ScrollView,
  VStack,
  Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import CircleRowScrollView from '../../components/molecules/ChatBoxtop';
import ChatBox from '../../components/ChatDialoguebox';
import StatusBarParent from '../../components/molecules/StatusBarParent';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {useStore} from '../../store';
import TextSemibold from '../../components/atoms/Text/TextSemibold';

const BackgroundImage = require('../../assets/images/TeacherProfile.png');

const ParentChat = () => {
  const store = useStore();
  console.log(store.user?.user.id_assigned);
  const {data: chats, isLoading} = useQuery({
    queryKey: ['chats'],
    queryFn: async () => {
      const {data} = await axios.get(
        `http://192.168.0.107:8080/chat/check-chat/${store.user?.user.child_id}`,
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <VStack>
        <TextSemibold text="Loading.." />
      </VStack>
    );
  }

  if (chats.message) {
    return (
      <ImageBackground
        source={BackgroundImage}
        h="$full"
        alignItems="center"
        justifyContent="center">
        <TextSemibold text="No chats found. Create a new one?" />
        <Pressable
          mt={'$5'}
          bg="#DBC9E1"
          p={'$3'}
          borderWidth={1}
          rounded={'$lg'}>
          <TextSemibold text="Create Chat" />
        </Pressable>
      </ImageBackground>
    );
  }

  console.log(chats.chats);

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarParent text="Chat" />
        <ScrollView paddingHorizontal={'$4'}>
          {/* <CircleRowScrollView /> */}
          {/* <ChatBox /> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentChat;
