import { HStack, Image, VStack, Pressable, Text, View } from '@gluestack-ui/themed';
import React from 'react';
import TextBold from './atoms/Text/TextBold';
import TextSemibold from './atoms/Text/TextSemibold';

const Abubakar = require('../assets/images/icons/D1.png');
const TeacherPic2 = require('../assets/images/icons/D2.png');
const TeacherPic3 = require('../assets/images/icons/D3.png');
const TeacherPic4 = require('../assets/images/icons/D4.png');

interface ChatBoxAlternativeProps {
  name: string;
  imageSource: any;
  text: string;
  time: string;
  onPress: () => void;
}

const ChatBoxAlternative: React.FC<ChatBoxAlternativeProps> = ({ name, imageSource, text, time, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <VStack
        w="$full"
        h="$20"
        borderColor="gray"
        rounded={'$2xl'}
        p="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <Image source={imageSource} alt="User Icon" style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
          <VStack>
            <TextSemibold text={name} fontSize={'$xl'} />
            <Text style={{ fontWeight: '500', fontSize: 14, color: 'black' }}>{text}</Text>
          </VStack>
          <Text style={{ fontWeight: '500', fontSize: 14, color: 'black' }}>{time}</Text>
        </HStack>
      </VStack>
    </Pressable>
  );
};

const ChatListAlternative: React.FC = () => {
  const handlePress = (name: string) => {
    console.log(`${name} pressed`);
  };

  const users = [
    { name: 'ALI PARENTS', imageSource: Abubakar, text: 'want to Discuss', time: '12:34 PM' },
    { name: 'HASSAN PARENTS', imageSource: TeacherPic2, text: 'want to Discuss', time: '01:23 PM' },
    { name: 'ABDULLAH PARENTS', imageSource: TeacherPic3, text: 'want to Discuss', time: '02:45 PM' },
    { name: 'ABBAS PARENTS', imageSource: TeacherPic4, text: 'want to Discuss', time: '03:56 PM' },
  ];

  return (
    <VStack >
      {users.map((user, index) => (
        <VStack key={index} style={{ width: '100%' }}>
          {index !== 0 && <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 8 }} />}
          <ChatBoxAlternative name={user.name} imageSource={user.imageSource} text={user.text} time={user.time} onPress={() => handlePress(user.name)} />
        </VStack>
      ))}
    </VStack>
  );
};

export default ChatListAlternative;
