import React from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  HStack,
  Pressable,
  Text,
  Image,
} from '@gluestack-ui/themed';
import {Linking} from 'react-native';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
const BackgroundImage = require('../../assets/images/Stud-course-bg.png');
const Avatar = require('../../assets/images/avatars/Bhaalooo_jumping.png');
const TeacherPic = require('../../assets/images/icons/y1.png');
const TeacherPic1 = require('../../assets/images/icons/y2.png');
const TeacherPic2 = require('../../assets/images/icons/y3.png');

interface TextBoldProps {
  children: React.ReactNode;
}

const TextBold: React.FC<TextBoldProps> = ({children}) => (
  <Text fontSize="$xl" fontWeight="bold" color="black" p={4}>
    {children}
  </Text>
);

interface CourseLinkProps {
  title: string;
  url: string;
}

const StudentHealth: React.FC = () => {
  const height = useBottomTabBarHeight();
  return (
    <View height="$full">
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarStudent text="Health" bgColor="#FFA360" textColor="black" />
        <HStack alignItems="center" justifyContent="center" mt={4}>
          <Image source={Avatar} alt="Avatar" size="xl" />
        </HStack>
        <ScrollView paddingHorizontal={'$3'}>
          <Pressable
            onPress={() =>
              Linking.openURL('https://youtu.be/oDPOHMFcFsA?feature=shared')
            }>
            <Box
              bg="#FFA360"
              p={4}
              my={4}
              mx={4}
              borderRadius={12}
              alignItems="center" // Center align the content vertically
              justifyContent="center" // Center align the content horizontally
              borderColor="black" // Border color
              borderWidth={2} // Border width
            >
              <TextBold>Yoga Freeze song</TextBold>
              <Image
                source={TeacherPic}
                alt="Teacher"
                width={70} // Adjust the width here
                height={70}
                resizeMode="contain"
              />
            </Box>
          </Pressable>
          <Box height={5} />
          <Pressable
            onPress={() =>
              Linking.openURL('https://youtu.be/Mwp9Cmgz2cw?feature=shared')
            }>
            <Box
              bg="#FFA360"
              p={4}
              my={4}
              mx={4}
              borderRadius={12}
              alignItems="center" // Center align the content vertically
              justifyContent="center" // Center align the content horizontally
              borderColor="black" // Border color
              borderWidth={2} // Border width
            >
              <TextBold>Breathing Exercise</TextBold>
              <Image
                source={TeacherPic2}
                alt="Teacher"
                width={70} // Adjust the width here
                height={70}
                resizeMode="contain"
              />
            </Box>
          </Pressable>
          <Box height={5} />
          <Pressable
            onPress={() =>
              Linking.openURL('https://youtu.be/nCNS-Lpubaw?feature=shared')
            }>
            <Box
              bg="#FFA360"
              p={4}
              my={4}
              mx={4}
              borderRadius={12}
              alignItems="center" // Center align the content vertically
              justifyContent="center" // Center align the content horizontally
              borderColor="black" // Border color
              borderWidth={2} // Border width
            >
              <TextBold>Yoga And mindfulllness</TextBold>
              <Image
                source={TeacherPic1}
                alt="Teacher"
                width={70} // Adjust the width here
                height={70}
                resizeMode="contain"
              />
            </Box>
          </Pressable>
          <Box height={16} />
          <Box
            bg="#FFA360"
            p={40}
            my={2}
            mx={4}
            borderRadius={12}
            alignItems="center" // Center align the content vertically
            justifyContent="center" // Center align the content horizontally
            borderColor="black" // Border color
            borderWidth={2} // Border width
          >
            <Text fontWeight="bold">
              Remember, taking care of your health is essential for a happy and
              fulfilling life!
            </Text>
          </Box>
          <Box height={height * 4} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StudentHealth;
