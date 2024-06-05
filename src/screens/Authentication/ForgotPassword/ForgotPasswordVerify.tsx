import React, {useState} from 'react';
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
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useStore} from '../../../store';

const BackgroundImage = require('../../../assets/images/signup-bg.png');
const Avatar = require('../../../assets/images/avatars/forgotpassword.png');

type NavigationType = {
  ForgotPasswordLast: undefined;
  Resend: undefined;
};

const ForgotPasswordVerify = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const store = useStore();

  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join('');
    const storedOtp = store.otp;

    if (enteredOtp === storedOtp) {
      navigation.navigate('ForgotPasswordLast');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

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
                <HStack space="sm" justifyContent="center">
                  {otp.map((value, index) => (
                    <Input
                      key={index}
                      bgColor="#DC9F72"
                      height={'$16'}
                      rounded={'$2xl'}
                      width={'20%'}
                      borderWidth={0}>
                      <VStack
                        w="$full"
                        alignItems="center"
                        justifyContent="center">
                        <InputField
                          inputMode="numeric"
                          type="text"
                          fontSize={'$2xl'}
                          fontFamily="Poppins-Bold"
                          placeholderTextColor={'black'}
                          maxLength={1}
                          value={value}
                          onChangeText={text => handleOtpChange(index, text)}
                        />
                      </VStack>
                    </Input>
                  ))}
                </HStack>
                {error && (
                  <TextRegular
                    text={error}
                    fontSize={'$sm'}
                    color="red"
                    textAlign="center"
                  />
                )}
              </VStack>
              <Box height={'$10'} />
              <Pressable
                onPress={verifyOtp}
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
