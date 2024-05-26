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
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
import {VStack} from '@gluestack-ui/themed';
import React from 'react';
import TextRegular from '../../components/atoms/Text/TextRegular';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const BackgroundImage = require('../../assets/images/admin-bg-profile.png');
const Avatar = require('../../assets/images/user-image.png');

const fields = [
  {
    title: 'Email',
    placeholder: 'admin@adhdcoach.com',
    icon: '',
  },
  {
    title: 'Username',
    placeholder: 'admin',
    icon: '',
  },

  {
    title: 'Password',
    placeholder: 'admin123',
    icon: '',
  },
];

type NavigationType = {
  AppAnalytics: undefined;
  Main: {screen: string};
};

const AdminProfile = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarAdmin text="Profile Settings" />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$5'}>
          <Center>
            <Image source={Avatar} alt="avatar icon" size="xl" />
            <TextSemibold text="Admin" fontSize={'$xl'} />
          </Center>
          <Box height={'$2'} />
          {fields.map((field, index) => (
            <VStack key={index}>
              <TextSemibold text={field.title} fontSize={'$xl'} />
              <Input
                bgColor="#D7E6ED"
                height={'$12'}
                rounded={'$lg'}
                borderWidth={0.5}
                borderColor="black">
                <InputField
                  type="text"
                  fontFamily="Poppins-Regular"
                  placeholder={field.placeholder}
                  paddingHorizontal={'$6'}
                  placeholderTextColor={'black'}
                  fontSize={'$sm'}
                />
              </Input>
              <Box height={'$3'} />
            </VStack>
          ))}
          <Box height={'$2'} />
          <HStack space="lg">
            <Button
              flex={1}
              android_ripple={{color: '#DEB5B5'}}
              size="xl"
              borderColor="black"
              bg={'#666666'}
              borderRadius={'$lg'}>
              <TextRegular text="Cancel" color="white" />
            </Button>
            <Button
              onPress={() => navigation.navigate('AppAnalytics')}
              flex={1}
              size="xl"
              borderColor="black"
              bg={'#648DA0'}
              borderRadius={'$lg'}>
              <TextRegular text="Save" color="white" />
            </Button>
          </HStack>
          <Box height={'$3'} />
          <Button
            onPress={() => navigation.navigate('Main', {screen: 'Home Main'})}
            flex={1}
            hardShadow="3"
            size="xl"
            borderColor="black"
            bg={'#A3BACD'}
            borderRadius={'$lg'}>
            <TextRegular text="Sign Out" color="white" />
          </Button>
          <Box height={useBottomTabBarHeight()} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AdminProfile;
