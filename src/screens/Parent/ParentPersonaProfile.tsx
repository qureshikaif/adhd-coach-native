import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Center,
  Image,
  Button,
} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import SideScreenButton from '../../components/atoms/Buttons/SideScreenButton';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {useStore} from '../../store';
import {handleLogout} from '../../helpers/handleLogout';
import StatusBarParent from '../../components/molecules/StatusBarParent';
import {NavigationProp, useNavigation} from '@react-navigation/native';
const TeacherPic = require('../../assets/images/icons/ProfilePicSana.png');
const BackgroundImage = require('../../assets/images/TeacherProfileSetting.png');

type NavigationType = {
  ParentProfileSettings: undefined;
  ParentPersonalInfo: undefined;
};

const ParentPersonalProfile = () => {
  const store = useStore();
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarParent text="Profile" />

        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$10'} />

          <Box flex={1}>
            <Box
              height={650}
              bgColor="#F3E3E3"
              justifyContent="flex-start"
              padding={20}
              borderRadius={20}>
              <Box height={'$5'} />

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
                    w="$full"
                    h="$full"
                  />
                </Box>
                <TextSemibold mt={4} text="Sana Zehra" />
              </Center>
              <Box height={'$10'} />
              <SideScreenButton
                text="Profile info"
                onPress={() => navigation.navigate('ParentPersonalInfo')}
              />
              <Box height={'$5'} />
              <SideScreenButton
                text="Profile Setting"
                onPress={() => navigation.navigate('ParentProfileSettings')}
              />
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

export default ParentPersonalProfile;
