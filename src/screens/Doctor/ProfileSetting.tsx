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
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarDoctor from '../../components/molecules/StatusBarDoctor';
import {VStack} from '@gluestack-ui/themed';
import React from 'react';
import {useStore} from '../../store';
import {handleLogout} from '../../helpers/handleLogout';
import {UserCircle} from 'lucide-react-native';

const BackgroundImage = require('../../assets/images/doctor-bg.png');

const ProfileSetting = () => {
  //   const navigation = useNavigation<NavigationProp<NavigationType>>();
  const store = useStore();

  if (!store.user) {
    return null;
  }

  console.log(store.user);

  const fields = [
    {
      title: 'Email',
      placeholder: 'sanaD11@adhdcoach.com',
      value: store.user?.user.email,
    },
    {
      title: 'Username',
      placeholder: 'sanaD11',
      value: store.user?.user.full_name,
    },
    {
      title: 'Doctor ID',
      placeholder: 'Sana123',
      value: store.user?.user.id_assigned,
    },
  ];

  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} minHeight={'$full'}>
        <StatusBarDoctor text="Profile Info" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$10'} />
          <Center>
            <UserCircle size={100} color="#555" />
          </Center>
          <Box height={'$10'} />

          {fields.map((field, index) => (
            <VStack key={index}>
              <TextSemibold text={field.title} fontSize={'$lg'} />
              <Input
                bgColor="#DEADAD"
                height={'$12'}
                rounded={'$lg'}
                width={'100%'}
                borderWidth={0}>
                <InputField
                  type="text"
                  value={String(field.value)}
                  fontFamily="Poppins-Regular"
                  placeholder={field.placeholder}
                  paddingHorizontal={'$6'}
                  placeholderTextColor={'black'}
                />
              </Input>
              <Box height={'$2'} />
            </VStack>
          ))}
          <Box height={'$5'} />
          {/* <HStack space="lg">
            <Button
              flex={1}
              android_ripple={{color: '#DEB5B5'}}
              //   onPress={() => navigation.navigate('ForgotPassword')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#947C7C'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Cancel" />
            </Button>
            <Button
              android_ripple={{color: '#DEB5B5'}}
              //   onPress={() => navigation.navigate('Signup')}
              flex={1}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Save" />
            </Button>
          </HStack> */}
          <Box height={'$2'} />
          <Button
            android_ripple={{color: 'gray'}}
            onPress={() => handleLogout(store)}
            flex={1}
            borderWidth={1}
            hardShadow="3"
            size="xl"
            borderColor="black"
            bg={'#DEB5B5'}
            borderRadius={'$lg'}>
            <TextSemibold text="Sign Out" />
          </Button>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProfileSetting;
