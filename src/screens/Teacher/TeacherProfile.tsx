import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  Box,
  Center,
  Image,
  Button,
} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import SideScreenButton from '../../components/atoms/Buttons/SideScreenButton';
import {useStore} from '../../store';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {handleLogout} from '../../helpers/handleLogout';

const TeacherPic = require('../../assets/images/icons/TeacherPic.png');
const BackgroundImage = require('../../assets/images/TeacherProfileSetting.png');

const TeacherProfile = () => {
  const store = useStore();
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text=" Profile" />
        <Box height={'$20'} />
        <ScrollView paddingHorizontal={'$4'}>
          <Center>
            <Box
              rounded={'$full'}
              overflow="hidden"
              width={100}
              height={100}
              borderWidth={2}
              borderColor="gray.200">
              <Image
                source={TeacherPic}
                alt="Teacher pic"
                w={'$full'}
                h={'$full'}
              />
            </Box>
            <Text mt={4} fontFamily="Poppins-Regular">
              Mr ABUBAKAR
            </Text>
          </Center>
          <Box height={'$20'} />

          <Box flex={1}>
            <Box
              height={450}
              bgColor="#CDAAAA"
              justifyContent="flex-start"
              padding={20}>
              <SideScreenButton text="Personal Info" />
              <Box height={'$5'} />
              <SideScreenButton text="Edit Peronal Info" />

              <Box flex={1} justifyContent="center" alignItems="center">
                <Button
                  onPress={() => handleLogout(store)}
                  android_ripple={{color: '#DEB5B5'}}
                  hardShadow="3"
                  width={'$48'}
                  h="$12"
                  borderColor="black"
                  bg={'#EDECD7'}
                  borderWidth={1}
                  borderRadius={20}>
                  <TextBold text="Sign Out" />
                </Button>
              </Box>
            </Box>
          </Box>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherProfile;
