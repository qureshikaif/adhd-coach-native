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
import React from 'react';
import TextBold from '../../components/atoms/Text/TextBold';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {VStack} from '@gluestack-ui/themed';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {useStore} from '../../store';
import {capitalizeFirstLetter} from '../../helpers/capitalizeLetter';

const TeacherPic = require('../../assets/images/icons/TeacherPic.png');
const BackgroundImage = require('../../assets/images/TeacherProfile.png');

// type NavigationType = {
//   ForgotPasswordVerify: undefined;
// };

const TeacherProfileSetting = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  const store = useStore();

  if (!store.user) {
    return null;
  }

  const fields = [
    {
      title: 'Email',
      placeholder: '.sanaD11@adhdcoach.com',
      value: store.user.user.email,
    },
    {
      title: 'Username',
      placeholder: 'sanaD11',
      value: capitalizeFirstLetter(store.user?.user.full_name),
    },

    {
      title: 'Password',
      placeholder: 'Sana123',
      value: store.user.user.password,
    },
  ];
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
              width={120}
              height={120}
              borderWidth={2}
              borderColor="gray.200">
              <Image
                source={TeacherPic}
                alt="Teacher Icon"
                w={'$full'}
                h={'$full'}
              />
            </Box>
            {/* <TextSemibold
              mt={4}
              text={capitalizeFirstLetter(
                store.user ? store.user.user.full_name : 'John Doe',
              )}
            /> */}
          </Center>
          <Box height={'$8'} />
          {fields.map((field, index) => (
            <VStack key={index}>
              <TextSemibold text={field.title} fontSize={'$xl'} />
              <Input
                bgColor="#BEADC3"
                height={'$12'}
                rounded={'$lg'}
                width={'100%'}
                borderWidth={0}>
                <InputField
                  type={field.title === 'Password' ? 'password' : 'text'}
                  value={field.value}
                  fontFamily="Poppins-Regular"
                  placeholder={field.placeholder}
                  paddingHorizontal={'$6'}
                  placeholderTextColor={'black'}
                />
              </Input>
              <Box height={'$4'} />
            </VStack>
          ))}
          <Box height={'$4'} />
          <HStack space="lg">
            <Button
              flex={1}
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
              flex={1}
              //   onPress={() => navigation.navigate('Signup')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#B597B8'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Save" />
            </Button>
          </HStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherProfileSetting;
