// TeacherChat.js
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
  TeacherChatOpen: {users: any};
};

const TeacherChat = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  // const store = useStore();
  // const {data: chats, isLoading} = useQuery({
  //   queryKey: ['chats'],
  //   queryFn: async () => {
  //     const {data} = await axios.get(
  //       `http://192.168.0.107:8080/chat/check-chat/${store.user?.user.child_id}`,
  //     );
  //     return data;
  //   },
  // });

  const {data: usersTeacher, isLoading: isLoadingUsers} = useQuery({
    queryKey: ['usersTeacher'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/chat/get-users',
      );
      return data;
    },
  });

  if (isLoadingUsers) {
    return <Loading bgImage={BackgroundImage} />;
  }

  if (!usersTeacher || usersTeacher.length === 0) {
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

  console.log(usersTeacher);

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarParent text="Chats" />
        <ScrollView paddingHorizontal={'$4'}>
          {usersTeacher.map((user: any, index: any) => (
            <ChatBox
              key={index}
              name={user.full_name}
              text={user.text}
              time={user.time}
              onPress={() =>
                navigation.navigate('TeacherChatOpen', {users: user})
              }
            />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherChat;
