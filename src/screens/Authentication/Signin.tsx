import {
  View,
  ImageBackground,
  HStack,
  Center,
  Input,
  InputField,
  VStack,
  Box,
  Pressable,
  Image,
} from '@gluestack-ui/themed';
import React from 'react';
import BackButton from '../../components/atoms/Buttons/BackButton';
import TextBold from '../../components/atoms/Text/TextBold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {colors} from '../../styles/colors';

const BackgroundImage = require('../../assets/images/signup-bg.png');
const Avatar = require('../../assets/images/avatars/login.png');
const EmailIcon = require('../../assets/images/icons/email.png');
const PasswordIcon = require('../../assets/images/icons/password.png');
const RoleIcon = require('../../assets/images/icons/chevron-down.png');

const fields = [
  {
    title: 'Email',
    icon: EmailIcon,
  },
  {
    title: 'Password',
    icon: PasswordIcon,
  },

  {
    title: 'Role',
    icon: RoleIcon,
  },
];

const Signin = () => {
  return (
    <View height={'$full'}>
      <ImageBackground
        source={BackgroundImage}
        minHeight={'$full'}
        paddingHorizontal={'$4'}>
        <Center>
          <HStack
            alignItems="center"
            width={'$full'}
            justifyContent="space-between"
            padding={'$4'}>
            <BackButton
              imageProps={{
                size: 'xs',
              }}
            />
            <TextBold text="Log In" paddingRight={'$8'} fontSize={'$3xl'} />
            <View />
          </HStack>
          <TextRegular fontSize={'$5xl'} text="Welcome" fontStyle="italic" />
          <Image
            source={Avatar}
            alt="Avatar"
            size={'xl'}
            resizeMode="contain"
          />

          <Box height={'$5'} />
          <VStack width={'$full'} rowGap={'$4'}>
            {fields.map((field, index) => (
              <HStack space="sm" key={index}>
                <Input
                  bgColor="#DC9F72"
                  height={'$12'}
                  rounded={'$2xl'}
                  width={'85%'}
                  borderWidth={0}>
                  <InputField
                    type="text"
                    fontFamily="Poppins-Regular"
                    placeholder={field.title}
                    paddingHorizontal={'$6'}
                    placeholderTextColor={'black'}
                  />
                </Input>
                <Box
                  width={'13%'}
                  borderRadius={'$full'}
                  bg="#DC9F72"
                  display="flex"
                  justifyContent="center"
                  alignItems="center">
                  <Image
                    source={field.icon}
                    alt="User Icon"
                    resizeMode="contain"
                    size="2xs"
                  />
                </Box>
              </HStack>
            ))}

            <HStack justifyContent="space-between">
              <HStack>
                <TextRegular text="New user?" fontSize={'$sm'} />
                <Pressable>
                  <TextBold
                    fontSize={'$sm'}
                    text={`${' '}Sign Up`}
                    color={colors['text-signup']}
                  />
                </Pressable>
              </HStack>
              <Pressable>
                <TextBold
                  fontSize={'$sm'}
                  text="Forgot Password?"
                  color={colors['text-signup']}
                />
              </Pressable>
            </HStack>
          </VStack>
          <Box height={'$10'} />
          <Pressable
            bgColor="#DC9F72"
            paddingHorizontal={'$8'}
            paddingVertical={'$2'}
            rounded={'$2xl'}>
            <TextSemibold text="Log In" fontSize={'$lg'} />
          </Pressable>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default Signin;
