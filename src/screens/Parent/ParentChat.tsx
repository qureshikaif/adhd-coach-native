// ParentChat.js
import React from 'react';
import {View, ImageBackground, ScrollView} from '@gluestack-ui/themed';
import ChatBox from '../../components/ChatDialoguebox';
import StatusBarParent from '../../components/molecules/StatusBarParent';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Loading from '../Loading';

const BackgroundImage = require('../../assets/images/TeacherProfile.png');

type NavigationType = {
  ParentChatOpen: {users: any};
};

const ParentChat = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  // const store = useStore();
  // const {data: chats, isLoading} = useQuery({
  //   queryKey: ['chats'],
  //   queryFn: async () => {
  //     const {data} = await axios.get(
  //       `https://adhd-coach-backend.vercel.app/chat/check-chat/${store.user?.user.child_id}`,
  //     );
  //     return data;
  //   },
  // });

  const {data: users, isLoading: isLoadingUsers} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const {data} = await axios.get(
        'https://adhd-coach-backend.vercel.app/chat/get-users',
      );
      return data;
    },
  });

  if (isLoadingUsers) {
    return <Loading bgImage={BackgroundImage} />;
  }

  if (!users || users.length === 0) {
    return (
      <ImageBackground
        source={BackgroundImage}
        h="$full"
        alignItems="center"
        justifyContent="center">
        <TextSemibold text="No users found. Check back later?" />
      </ImageBackground>
    );
  }

  console.log(users);

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarParent text="Chats" />
        <ScrollView paddingHorizontal={'$4'}>
          {users.map((user: any, index: any) => (
            <ChatBox
              key={index}
              name={user.full_name}
              text={user.text}
              time={user.time}
              onPress={() =>
                navigation.navigate('ParentChatOpen', {users: user})
              }
            />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentChat;
