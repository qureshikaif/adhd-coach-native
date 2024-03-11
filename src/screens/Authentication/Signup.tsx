import {
  View,
  ImageBackground,
  Text,
  HStack,
  Center,
  Input,
  InputField,
  VStack,
  Box,
  Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import BackButton from '../../components/atoms/BackButton';

const BackgroundImage = require('../../assets/images/AuthBackground.png');

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
            gap={'$10'}
            paddingTop={'$12'}
            paddingBottom={'$5'}
            paddingHorizontal={'$5'}>
            <BackButton />
            <Text fontSize={'$4xl'} color="black" fontFamily="Poppins-Bold">
              Sign Up
            </Text>
            <View />
          </HStack>
          <Text fontSize={'$3xl'} fontFamily="Poppins-Regular">
            Create an account
          </Text>
          <Box height={'$5'} />
          <VStack width={'$full'} rowGap={'$4'}>
            <Input
              bgColor="#DC9F72"
              height={'$12'}
              rounded={'$full'}
              borderWidth={0}>
              <InputField
                type="text"
                fontFamily="Poppins-Regular"
                placeholder="Full name"
                paddingHorizontal={'$6'}
                placeholderTextColor={'black'}
              />
            </Input>

            <Input
              bgColor="#DC9F72"
              height={'$12'}
              rounded={'$full'}
              borderWidth={0}>
              <InputField
                type="text"
                fontFamily="Poppins-Regular"
                placeholder="Email"
                paddingHorizontal={'$6'}
                placeholderTextColor={'black'}
              />
            </Input>
            <Input
              bgColor="#DC9F72"
              height={'$12'}
              rounded={'$full'}
              borderWidth={0}>
              <InputField
                type="text"
                fontFamily="Poppins-Regular"
                placeholder="Password"
                paddingHorizontal={'$6'}
                placeholderTextColor={'black'}
              />
            </Input>
            <Input
              bgColor="#DC9F72"
              height={'$12'}
              rounded={'$full'}
              borderWidth={0}>
              <InputField
                fontFamily="Poppins-Regular"
                type="text"
                placeholder="Confirm password"
                paddingHorizontal={'$6'}
                placeholderTextColor={'black'}
              />
            </Input>
            <Input
              bgColor="#DC9F72"
              height={'$12'}
              rounded={'$full'}
              borderWidth={0}>
              <InputField
                type="text"
                placeholder="Role"
                paddingHorizontal={'$6'}
                placeholderTextColor={'black'}
              />
            </Input>
            <Text paddingHorizontal={'$2'} fontFamily="Poppins-Regular">
              By Signing up, you agree to our Privacy Policy and Terms of
              Service.
            </Text>
          </VStack>
          <Box height={'$5'} />
          <Pressable
            bgColor="#DC9F72"
            paddingHorizontal={'$8'}
            paddingVertical={'$2'}
            rounded={'$full'}>
            <Text fontFamily="Poppins-SemiBold" fontSize={'$lg'}>
              Sign Up
            </Text>
          </Pressable>
          <HStack marginTop={'$3.5'}>
            <Text fontFamily="Poppins-Regular">Already have an account? </Text>
            <Pressable>
              <Text color="#116CC8" fontFamily="Poppins-Bold">
                Sign In
              </Text>
            </Pressable>
          </HStack>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default Signup;
