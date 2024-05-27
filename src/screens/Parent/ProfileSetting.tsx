import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  Box,
  Center,
  Image,
  HStack,
  Input,
  InputField,
  Button,
} from '@gluestack-ui/themed';
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {VStack} from '@gluestack-ui/themed';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
const TeacherPic = require('../../assets/images/icons/TeacherPic.png');
const BackgroundImage = require('../../assets/images/TeacherProfile.png');

const fields = [
  {
    title: 'Email',
    placeholder: '.sanaD11@adhdcoach.com',
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
// type NavigationType = {
//   ForgotPasswordVerify: undefined;
// };

const ParentProfileSetting = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Profile Settings" />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <Center>
            <Box
              rounded={'$full'}
              overflow="hidden"
              width={100}
              height={100}
              borderWidth={2}
              borderColor="gray.200">
              <Image
                source={TeacherPic}
                alt="Teacher Icon"
                w="$full"
                h="$full"
              />
            </Box>
            <Text mt={4} fontFamily="Poppins-Regular">
              Mrs Ahmed
            </Text>
          </Center>
          <Box height={'$8'} />
          {fields.map((field, index) => (
            <VStack key={index}>
              <TextSemibold text={field.title} fontSize={'$2xl'} />
              <Input
                bgColor="#BEADC3"
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
              hardShadow="5"
              size="xl"
              borderColor="black"
              bg={'#908282'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Cancel" />
            </Button>
            <Button
              android_ripple={{color: '#DEB5B5'}}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#B597B8'}
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

export default ParentProfileSetting;
