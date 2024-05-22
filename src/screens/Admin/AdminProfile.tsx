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
  import TextBold from '../../components/atoms/Text/TextBold';
  import TextSemibold from '../../components/atoms/Text/TextSemibold';
  import StatusBarAdmin from '../../components/molecules/StatusBarAdmin';
  import {VStack} from '@gluestack-ui/themed';
  import React from 'react';
  
  const BackgroundImage = require('../../assets/images/admin-bg-profile.png');
  const Avatar = require('../../assets/images/user-image.png');
  
  const fields = [
    {
      title: 'Email',
      placeholder: 'admin@adhdcoach.com',
      icon: '',
    },
    {
      title: 'Username',
      placeholder: 'admin',
      icon: '',
    },
  
    {
      title: 'Password',
      placeholder: 'admin123',
      icon: '',
    },
  ];
  
  const AdminProfile = () => {
    //   const navigation = useNavigation<NavigationProp<NavigationType>>();
    return (
      <View height={'$full'}>
        <ImageBackground source={BackgroundImage} minHeight={'$full'}>
          <StatusBarAdmin text="Profile Settings" isSettingsVisible />
          <Box height={'$8'} />
          <ScrollView paddingHorizontal={'$4'}>
            <Center>
              <Image source={Avatar} alt="avatar icon" />
            </Center>
            {fields.map((field, index) => (
              <VStack key={index}>
                <TextSemibold text={field.title} fontSize={'$2xl'} />
                <Input
                  bgColor="#D7E6ED"
                  height={'$12'}
                  rounded={'$lg'}
                  width={'95%'}
                  borderWidth={'$1'}
                  borderColor="black">
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
                hardShadow="3"
                size="xl"
                borderColor="black"
                bg={'#666666'}
                borderWidth={1}
                borderRadius={'$lg'}>
                <TextBold text="Cancel" color="white"/>
              </Button>
              <Button
                //   onPress={() => navigation.navigate('Signup')}
                hardShadow="3"
                size="xl"
                borderColor="black"
                bg={'#648DA0'}
                borderWidth={1}
                borderRadius={'$lg'}>
                <TextBold text="Save Changes" color="white"/>
              </Button>
            </HStack>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  };
  
  export default AdminProfile;
  