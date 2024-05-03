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
} from '@gluestack-ui/themed';
import React from 'react';
import BackButton from '../../components/atoms/Buttons/BackButton';
import TextBold from '../../components/atoms/Text/TextBold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {colors} from '../../styles/colors';

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
            <TextBold text="Sign Up" fontSize={'$4xl'} />
            <View />
          </HStack>
          <TextRegular fontSize={'$3xl'} text="Create an account" />

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
            <TextRegular
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
            rounded={'$full'}>
            <TextSemibold text="Sign Up" fontSize={'$lg'} />
          </Pressable>
          <HStack marginTop={'$3.5'}>
            <TextRegular text="Already have an account?" />
            <Pressable>
              <TextBold text="Sign In" color={colors['text-signup']} />
            </Pressable>
          </HStack>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default Signup;
