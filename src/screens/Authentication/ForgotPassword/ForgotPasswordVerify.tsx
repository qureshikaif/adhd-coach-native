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
import BackButton from '../../../components/atoms/Buttons/BackButton';
import TextRegular from '../../../components/atoms/Text/TextRegular';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import TextBold from '../../../components/atoms/Text/TextBold';
import { colors } from '../../../styles/colors';


const BackgroundImage = require('../../../assets/images/signup-bg.png');
const Avatar = require('../../../assets/images/avatars/forgotpassword.png');
const EmailIcon = require('../../../assets/images/icons/email.png');
// const PasswordIcon = require('../../assets/images/icons/password.png');
// const RoleIcon = require('../../assets/images/icons/chevron-down.png');

const fields = [
  {
    title: 'Email',
    icon: EmailIcon,
  },
];

type NavigationType = {
  ForgotPasswordLast: undefined;
  Resend: undefined;
};

const ForgotPasswordVerify = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();

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
            <TextSemibold
              text="Forgot Password"
              paddingRight={'$8'}
              fontSize={'$2xl'}
            />
            <View />
          </HStack>
          {/* <TextRegular fontSize={'$5xl'} text="Welcome" fontStyle="italic" /> */}
          <VStack h={'85%'} justifyContent="center" alignItems="center">
            <Center>
              <Image
                source={Avatar}
                alt="Avatar"
                size={'xl'}
                resizeMode="contain"
              />
              <TextSemibold text="VERIFY" fontSize={'$xl'} color="#E16565" />
              <TextRegular
                text="Please enter a 4 digit verification code that is sent to your email address"
                fontSize={'$sm'}
                paddingHorizontal={'$4'}
                textAlign="center"
              />

              <Box height={'$5'} />
              <VStack width={'$full'} rowGap={'$4'}>
                {fields.map((field, index) => (
                  <HStack space="sm" key={index} justifyContent='center'>
                    <Input
                      bgColor="#DC9F72"
                      height={'$16'}
                      rounded={'$2xl'}
                      width={'20%'}
                      borderWidth={0}>
                      <InputField
                        type="text"
                        fontFamily="Poppins-Regular"
                        paddingHorizontal={'$10'}
                        placeholderTextColor={'black'}
                      />
                    </Input>
                    <Input
                      bgColor="#DC9F72"
                      height={'$16'}
                      rounded={'$2xl'}
                      width={'20%'}
                      borderWidth={0}>
                      <InputField
                        type="text"
                        fontFamily="Poppins-Regular"
                        paddingHorizontal={'$10'}
                        placeholderTextColor={'black'}
                      />
                    </Input>
                    <Input
                      bgColor="#DC9F72"
                      height={'$16'}
                      rounded={'$2xl'}
                      width={'20%'}
                      borderWidth={0}>
                      <InputField
                        type="text"
                        fontFamily="Poppins-Regular"
                        paddingHorizontal={'$10'}
                        placeholderTextColor={'black'}
                      />
                    </Input>
                    <Input
                      bgColor="#DC9F72"
                      height={'$16'}
                      rounded={'$2xl'}
                      width={'20%'}
                      borderWidth={0}>
                      <InputField
                        type="text"
                        fontFamily="Poppins-Regular"
                        paddingHorizontal={'$10'}
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
               <VStack>
                <TextRegular text="Didnt Receive it?" fontSize={'$sm'} />
                <HStack>
                  <Pressable onPress={() => navigation.navigate('Resend')}>
                  <TextBold
                    fontSize={'$sm'}
                    text={`${' '}Resend`}/>
                </Pressable>
                </HStack>
              </VStack>
                {/* <HStack justifyContent="space-between">
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
              </HStack> */}
              </VStack>
              <Box height={'$10'} />
              <Pressable
                onPress={() => navigation.navigate('ForgotPasswordLast')}
                bgColor="#DC9F72"
                paddingHorizontal={'$8'}
                paddingVertical={'$2'}
                rounded={'$2xl'}>
                <TextSemibold text="Verify" fontSize={'$lg'} />
              </Pressable>
            </Center>
          </VStack>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default ForgotPasswordVerify;
