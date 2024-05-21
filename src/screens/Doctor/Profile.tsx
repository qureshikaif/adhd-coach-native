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

const BackgroundImage = require('../../assets/images/doctor-bg.png');
const Avatar = require('../../assets/images/avatars/login.png');

const fields = [
  {
    title: 'Email',
    placeholder: 'sanaD11@adhdcoach.com',
    icon: '',
  },
  {
    title: 'Username',
    placeholder: 'sanaD11',
    icon: '',
  },

  {
    title: 'Password',
    placeholder: 'Sana123',
    icon: '',
  },
];

const DoctorProfile = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarDoctor text="Profile Settings" isSettingsVisible />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <Center>
            <Image source={Avatar} alt="avatar icon" />
          </Center>
          {fields.map((field, index) => (
            <VStack key={index}>
              <TextSemibold text={field.title} fontSize={'$2xl'} />
              <Input
                bgColor="#DEADAD"
                height={'$12'}
                rounded={'$lg'}
                width={'95%'}
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
              //   onPress={() => navigation.navigate('Signup')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Save Changes" />
            </Button>
          </HStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default DoctorProfile;
