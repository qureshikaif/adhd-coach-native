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
import {useStore} from '../../store';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {handleLogout} from '../../helpers/handleLogout';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {capitalizeFirstLetter} from '../../helpers/capitalizeLetter';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const TeacherPic = require('../../assets/images/icons/TeacherPic.png');
const BackgroundImage = require('../../assets/images/TeacherProfileSetting.png');

type NavigationType = {
  TeacherProfileSettings: undefined;
  TeacherEditPersonalInfo: undefined;
};

const TeacherProfile = () => {
  const store = useStore();
  const navigation = useNavigation<NavigationProp<NavigationType>>();
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
            <TextSemibold
              mt={4}
              text={capitalizeFirstLetter(
                store.user ? store.user.user.full_name : 'John Doe',
              )}
            />
          </Center>
          <Box height={'$20'} />

          <Box flex={1}>
            <Box
              height={450}
              bgColor="#CDAAAA"
              justifyContent="flex-start"
              padding={20}>
              <SideScreenButton
                text="Personal Info"
                onPress={() => navigation.navigate('TeacherEditPersonalInfo')}
              />
              <Box height={'$5'} />
              <SideScreenButton
                text="Profile Settings"
                onPress={() => navigation.navigate('TeacherProfileSettings')}
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

export default TeacherProfile;
