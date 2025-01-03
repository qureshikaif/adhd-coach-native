// DoctorChat.js
import React from 'react';
import {View, ImageBackground, ScrollView} from '@gluestack-ui/themed';
import ChatBox from '../../components/ChatDialoguebox';
import StatusBarParent from '../../components/molecules/StatusBarParent';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Loading from '../Loading';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';

const BackgroundImage = require('../../assets/images/TeacherEditPersonal.png');

type NavigationType = {
  DoctorChatOpen: {users: any};
};

const DoctorChat = () => {
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

  const {data: usersDoctor, isLoading: isLoadingUsers} = useQuery({
    queryKey: ['usersDoctor'],
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

  if (!usersDoctor || usersDoctor.length === 0) {
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

  console.log(usersDoctor);

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarDoctor text="Chats" />
        <ScrollView paddingHorizontal={'$4'}>
          {usersDoctor.map((user: any, index: any) => (
            <ChatBox
              key={index}
              name={user.full_name}
              text={user.text}
              time={user.time}
              onPress={() =>
                navigation.navigate('DoctorChatOpen', {users: user})
              }
            />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default DoctorChat;
