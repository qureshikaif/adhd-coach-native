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
import StatusBarParent from '../../components/molecules/StatusBarParent';
import {useStore} from '../../store';
import {capitalizeFirstLetter} from '../../helpers/capitalizeLetter';
import {handleLogout} from '../../helpers/handleLogout';
import {UserCircle} from 'lucide-react-native';
const BackgroundImage = require('../../assets/images/TeacherProfile.png');

const ParentProfileSetting = () => {
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
      value: capitalizeFirstLetter(store.user.user.full_name),
    },
    {
      title: 'Assigned Children Id',
      placeholder: 'Sana123',
      value: store.user.user.child_id,
    },
  ];

  return (
    <View flex={1}>
      <ImageBackground source={BackgroundImage} h="$full">
        <StatusBarParent text="Profile Info" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$8'} />
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
            {/* <TextSemibold
              mt={4}
              text={capitalizeFirstLetter(
                store.user ? store.user.user.full_name : 'John Doe',
              )}
            /> */}
          </Center>
          <Box height={32} />
          {fields.map((field, index) => (
            <VStack key={index} marginBottom={16}>
              <TextSemibold text={field.title} fontSize={'$lg'} />
              <Input
                bgColor="#BEADC3"
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
            </VStack>
          ))}
          <Box height={'$4'} />
          {/* <HStack space="lg" marginBottom={15}>
            <Button
              flex={1}
              android_ripple={{color: '#DEB5B5'}}
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
              android_ripple={{color: '#DEB5B5'}}
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
            hardShadow="3"
            size="xl"
            borderWidth={1}
            borderColor="black"
            bg={'#BEADC3'}
            borderRadius={'$lg'}>
            <TextSemibold text="Sign Out" />
          </Button>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ParentProfileSetting;
