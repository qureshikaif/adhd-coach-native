import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Center,
  Image,
  HStack,
  Input,
  InputField,
  Button,
} from '@gluestack-ui/themed';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';
import {VStack} from '@gluestack-ui/themed';
import React from 'react';
import {useStore} from '../../store';

const BackgroundImage = require('../../assets/images/doctor-bg.png');
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');

const ProfileSetting = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  const store = useStore();

  // if (!store.user) {
  //   return null;
  // }

  const fields = [
    {
      title: 'Email',
      placeholder: 'sanaD11@adhdcoach.com',
      value: store.user?.user.email,
    },
    {
      title: 'Username',
      placeholder: 'sanaD11',
      value: store.user?.user.full_name,
    },
    {
      title: 'Password',
      placeholder: 'Sana123',
      value: store.user?.user.password,
    },
  ];

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarDoctor text="Profile Settings" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$8'} />
          <Center>
            <Image source={TeacherPic} alt="Teacher Pic" />
          </Center>
          {fields.map((field, index) => (
            <VStack key={index}>
              <TextSemibold text={field.title} fontSize={'$2xl'} />
              <Input
                bgColor="#DEADAD"
                height={'$12'}
                rounded={'$lg'}
                width={'100%'}
                borderWidth={0}>
                <InputField
                  type="text"
                  fontFamily="Poppins-Regular"
                  placeholder={field.placeholder}
                  paddingHorizontal={'$6'}
                  placeholderTextColor={'black'}
                />
              </Input>
              <Box height={'$2'} />
            </VStack>
          ))}
          <Box height={'$10'} />
          <HStack space="lg">
            <Button
              flex={1}
              android_ripple={{color: '#DEB5B5'}}
              //   onPress={() => navigation.navigate('ForgotPassword')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#947C7C'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Cancel" />
            </Button>
            <Button
              android_ripple={{color: '#DEB5B5'}}
              //   onPress={() => navigation.navigate('Signup')}
              flex={1}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Save" />
            </Button>
          </HStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProfileSetting;
