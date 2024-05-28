import { HStack, Image, VStack, Pressable, View } from '@gluestack-ui/themed';
import React from 'react';
import TextBold from './atoms/Text/TextBold';
import { Text } from 'react-native-svg';

const TeacherPic1 = require('../assets/images/icons/TeacherPic.png');
const TeacherPic2 = require('../assets/images/icons/TeacherPic.png');
const TeacherPic3 = require('../assets/images/icons/TeacherPic.png');
const TeacherPic4 = require('../assets/images/icons/TeacherPic.png');
const TeacherPic5 = require('../assets/images/icons/TeacherPic.png');

interface ChatBoxProps {
  name: string;
  imageSource: any;
  onPress: () => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ name, imageSource, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <VStack
        w="$full"
        h="$24"
        borderColor="gray"
        rounded={'$2xl'}
        p="$4">
        <HStack alignItems="center" space="lg">
          <Image source={imageSource} alt="User Icon" style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
          <TextBold text={name} fontSize={'$xl'} />
       
        </HStack>
      </VStack>
    </Pressable>
  );
};

const ChatList: React.FC = () => {
  const handlePress = (name: string) => {
    console.log(`${name} pressed`);
  };

  const users = [
    { name: 'M.abubakar', imageSource: TeacherPic1 },
    { name: 'Sana', imageSource: TeacherPic2 },
    { name: 'Aleena', imageSource: TeacherPic3 },
    { name: 'Kaif', imageSource: TeacherPic4 },
    { name: 'Ahmed', imageSource: TeacherPic5 },
  ];

  return (
    <VStack >
      {users.map((user, index) => (
        <View key={index} style={{ width: '100%' }}>
          {index !== 0 && <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 8 }} />}
          <ChatBox name={user.name} imageSource={user.imageSource} onPress={() => handlePress(user.name)} />
        </View>
      ))}
    </VStack>
  );
};

export default ChatList;
