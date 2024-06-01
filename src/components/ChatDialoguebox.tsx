import {HStack, Image, VStack, Pressable, View} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from './atoms/Text/TextSemibold';
import TextRegular from './atoms/Text/TextRegular';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const Abubakar = require('../assets/images/icons/AbubakarPic.png');
const TeacherPic2 = require('../assets/images/icons/ProfilePicSana.png');
const TeacherPic3 = require('../assets/images/icons/AleenaPic.png');
const TeacherPic4 = require('../assets/images/icons/kaifPic.png');

interface ChatBoxProps {
  name: string;
  imageSource: any;
  text: string;
  time: string;
  onPress: () => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  name,
  imageSource,
  text,
  time,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <VStack w="$full" h="$20" borderColor="gray" rounded={'$2xl'} p="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <Image
            source={imageSource}
            alt="User Icon"
            size="sm"
            resizeMode="contain"
            aspectRatio={1}
            rounded="$full"
          />
          <VStack>
            <TextSemibold text={name} fontSize={'$xl'} />
            <TextRegular text={text} fontSize={'$sm'} />
          </VStack>
          <TextRegular text={time} fontSize={'$sm'} />
        </HStack>
      </VStack>
    </Pressable>
  );
};

type NavigationType = {
  Chat: undefined;
};

const ChatList: React.FC = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const handlePress = () => navigation.navigate('Chat');

  const users = [
    {
      name: 'M.Abubakar',
      imageSource: Abubakar,
      text: 'want to Discuss',
      time: '12:34 PM',
    },
    {
      name: 'Sana',
      imageSource: TeacherPic2,
      text: 'want to Discuss',
      time: '01:23 PM',
    },
    {
      name: 'Aleena',
      imageSource: TeacherPic3,
      text: 'want to Discuss',
      time: '02:45 PM',
    },
    {
      name: 'Kaif',
      imageSource: TeacherPic4,
      text: 'want to Discuss',
      time: '03:56 PM',
    },
    // { name: 'Ahmed', imageSource: TeacherPic5, text: 'want to Discuss', time: '04:30 PM' },
  ];

  return (
    <VStack>
      {users.map((user, index) => (
        <VStack key={index} style={{width: '100%'}}>
          {index !== 0 && (
            <View
              style={{height: 1, backgroundColor: 'gray', marginVertical: 8}}
            />
          )}
          <ChatBox
            name={user.name}
            imageSource={user.imageSource}
            text={user.text}
            time={user.time}
            onPress={() => handlePress(user.name)}
          />
        </VStack>
      ))}
    </VStack>
  );
};

export default ChatList;
