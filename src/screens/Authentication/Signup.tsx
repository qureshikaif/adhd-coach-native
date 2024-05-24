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
const Avatar = require('../../assets/images/avatars/signup.png');
const UserIcon = require('../../assets/images/icons/user.png');
const EmailIcon = require('../../assets/images/icons/email.png');
const PasswordIcon = require('../../assets/images/icons/password.png');
const RoleIcon = require('../../assets/images/icons/chevron-down.png');

const fields = [
  {
    title: 'Full name',
    icon: UserIcon,
  },
  {
    title: 'Email',
    icon: EmailIcon,
  },
  {
    title: 'Password',
    icon: PasswordIcon,
  },
  {
    title: 'Confirm password',
    icon: PasswordIcon,
  },
  {
    title: 'Role',
    icon: RoleIcon,
  },
];

const Signup = () => {
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
            <TextBold text="Sign Up" paddingRight={'$8'} fontSize={'$3xl'} />
            <View />
          </HStack>
          <Image source={Avatar} alt="Avatar" size={'lg'} />
          <TextRegular
            fontSize={'$4xl'}
            text="Create an account"
            fontStyle="italic"
          />

          <Box height={'$5'} />
          <VStack width={'$full'} rowGap={'$3'}>
            {fields.map((field, index) => (
              <HStack space="sm" key={index}>
                <Input
                  bgColor="#DC9F72"
                  height={'$12'}
                  rounded={'$2xl'}
                  width={'$full'}
                  borderWidth={0}>
                  <InputField
                    type="text"
                    fontFamily="Poppins-Regular"
                    placeholder={field.title}
                    paddingHorizontal={'$6'}
                    placeholderTextColor={'black'}
                  />
                </Input>
                {/* <Box
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
                </Box> */}
              </HStack>
            ))}

            <TextRegular
              fontSize={'$xs'}
              paddingHorizontal={'$2'}
              text="By Signing up, you agree to our Privacy Policy and Terms of
              Service."
            />
          </VStack>
          <Box height={'$5'} />
          <Pressable
            bgColor="#DC9F72"
            paddingHorizontal={'$8'}
            paddingVertical={'$2'}
            rounded={'$2xl'}>
            <TextSemibold text="Sign Up" fontSize={'$lg'} />
          </Pressable>
          <HStack marginTop={'$3.5'}>
            <TextRegular fontSize={'$sm'} text="Already have an account?" />
            <Pressable>
              <TextBold text={`${' '}Sign In`} color={colors['text-signup']} />
            </Pressable>
          </HStack>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default Signup;
