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
  InputSlot,
  SelectTrigger,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
} from '@gluestack-ui/themed';
import React from 'react';
import BackButton from '../../components/atoms/Buttons/BackButton';
import TextBold from '../../components/atoms/Text/TextBold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {colors} from '../../styles/colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ChevronDown, Lock, Mail, User} from 'lucide-react-native';

const BackgroundImage = require('../../assets/images/signup-bg.png');
const Avatar = require('../../assets/images/avatars/login.png');

const fields = [
  {
    title: 'Email',
    icon: Mail,
  },
  {
    title: 'Password',
    icon: Lock,
  },
];

type NavigationType = {
  Signup: undefined;
  ForgotPassword: undefined;
};

const Signin = () => {
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
                  width={'$full'}
                  borderWidth={0}>
                  <InputSlot pl="$4">
                    <field.icon size={25} color={'black'} />
                  </InputSlot>
                  <InputField
                    type="text"
                    fontFamily="Poppins-Regular"
                    placeholder={field.title}
                    paddingHorizontal={'$6'}
                    placeholderTextColor={'black'}
                  />
                </Input>
              </HStack>
            ))}
            <Select>
              <SelectTrigger
                bgColor="#DC9F72"
                height={'$12'}
                paddingStart={'$4'}
                paddingEnd={'$3'}
                rounded={'$2xl'}
                width={'$full'}>
                <User size={25} color={'black'} />
                <SelectInput
                  paddingStart={'$5'}
                  mt={'$1'}
                  placeholder="Role"
                  fontFamily="Poppins-Regular"
                  placeholderTextColor={'black'}
                />
                <SelectIcon as={ChevronDown} size={'xl'} color="black" />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent bg="whitesmoke">
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Admin" value="admin" />
                  <SelectItem label="Doctor" value="doctor" />
                  <SelectItem label="Teacher" value="teacher" />
                  <SelectItem label="Parent" value="parent" />
                  <SelectItem label="Student" value="student" />
                </SelectContent>
              </SelectPortal>
            </Select>

            <HStack justifyContent="space-between">
              <HStack>
                <TextRegular text="New user?" fontSize={'$sm'} />
                <Pressable onPress={() => navigation.navigate('Signup')}>
                  <TextBold
                    fontSize={'$sm'}
                    text={`${' '}Sign Up`}
                    color={colors['text-signup']}
                  />
                </Pressable>
              </HStack>
              <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
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
