import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Center,
  Input,
  InputField,
  Button,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {VStack} from '@gluestack-ui/themed';
import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {useStore} from '../../store';
import {capitalizeFirstLetter} from '../../helpers/capitalizeLetter';
import {handleLogout} from '../../helpers/handleLogout';
import {UserCircle} from 'lucide-react-native';

const BackgroundImage = require('../../assets/images/PatientProfile-bg.png');

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
      value: store.user?.user.email,
    },
    {
      title: 'Username',
      placeholder: 'sanaD11',
      // value: store.user?.user.full_name,
      value: capitalizeFirstLetter(store.user?.user.full_name),
    },

    {
      title: 'Assigned ID',
      placeholder: 'Sana123',
      value: store.user?.user.id_assigned,
    },
  ];
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarTeacher text="Profile Info" />
        <Box height={'$8'} />
        <ScrollView paddingHorizontal={'$4'}>
          <Center>
            <UserCircle size={100} color="#555" />
            {/* <Box
              rounded={'$full'}
              overflow="hidden"
              width={90}
              height={90}
              borderWidth={2}
              borderColor="gray.200">
              <Image
                source={TeacherPic}
                alt="Teacher Icon"
                w="$full"
                h={90}
                resizeMode="cover"
              />
            </Box> */}
          </Center>
          <Box height={'$8'} />
          {fields.map((field, index) => (
            <VStack key={index}>
              <TextSemibold text={field.title} fontSize={'$lg'} />
              <Input
                bgColor="#F0CCCC"
                height={'$12'}
                rounded={'$lg'}
                width={'100%'}
                borderWidth={0}>
                <InputField
                  type={field.title === 'Password' ? 'password' : 'text'}
                  value={String(field.value)}
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
          {/* <HStack space="lg">
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
          </HStack> */}
          <Button
            android_ripple={{color: 'gray'}}
            onPress={() => handleLogout(store)}
            flex={1}
            borderWidth={1}
            hardShadow="3"
            size="xl"
            borderColor="black"
            bg={'#F0CCCC'}
            borderRadius={'$lg'}>
            <TextSemibold text="Sign Out" />
          </Button>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TeacherProfileSetting;
