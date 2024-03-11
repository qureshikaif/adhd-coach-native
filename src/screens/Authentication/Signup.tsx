import {
  View,
  ImageBackground,
  Text,
  HStack,
  Image,
  Center,
  Input,
  InputField,
  VStack,
  Box,
  Pressable,
} from '@gluestack-ui/themed';
import React from 'react';

const BackgroundImage = require('../../assets/images/AuthBackground.png');
const BackArrow = require('../../assets/images/BackArrow.png');

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
            gap={'$12'}
            paddingVertical={'$12'}
            paddingHorizontal={'$5'}>
            <Image source={BackArrow} alt="Back Arrow" width={50} height={50} />
            <Text fontSize={'$4xl'} fontWeight="$extrabold" color="black">
              Sign Up
            </Text>
            <View />
          </HStack>
          <Text fontSize={'$3xl'}>Create an account</Text>
          <Box height={'$12'} />
          <VStack width={'$full'} rowGap={'$4'}>
            <Input bgColor="#DC9F72" height={'$12'} rounded={'$full'}>
              <InputField
                type="text"
                placeholder="Full name"
                paddingHorizontal={'$6'}
                placeholderTextColor={'black'}
              />
            </Input>
            <Input bgColor="#DC9F72" height={'$12'} rounded={'$full'}>
              <InputField
                type="text"
                placeholder="Password"
                paddingHorizontal={'$6'}
                placeholderTextColor={'black'}
              />
            </Input>
            <Input bgColor="#DC9F72" height={'$12'} rounded={'$full'}>
              <InputField
                type="text"
                placeholder="Confirm password"
                paddingHorizontal={'$6'}
                placeholderTextColor={'black'}
              />
            </Input>
            <Input bgColor="#DC9F72" height={'$12'} rounded={'$full'}>
              <InputField
                type="text"
                placeholder="Role"
                paddingHorizontal={'$6'}
                placeholderTextColor={'black'}
              />
            </Input>
            <Text paddingHorizontal={'$2'}>
              By Signing up, you agree to our Privacy Policy and Terms of
              Service.
            </Text>
          </VStack>
          <Box height={'$10'} />
          <Pressable
            bgColor="#DC9F72"
            paddingHorizontal={'$10'}
            paddingVertical={'$4'}
            rounded={'$full'}>
            <Text>Sign Up</Text>
          </Pressable>
          <HStack marginTop={'$4.5'}>
            <Text>Already have an account? </Text>
            <Pressable>
              <Text color="#DC9F72">Sign In</Text>
            </Pressable>
          </HStack>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default Signup;
