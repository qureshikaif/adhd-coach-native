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
  SelectItem,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectPortal,
  SelectTrigger,
  InputSlot,
} from '@gluestack-ui/themed';
import BackButton from '../../../components/atoms/Buttons/BackButton';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useStore} from '../../../store';
import axios from 'axios';
import {User, ChevronDown, Mail, Lock} from 'lucide-react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ButtonSpinner} from '@gluestack-ui/themed';

const BackgroundImage = require('../../../assets/images/signup-bg.png');
const Avatar = require('../../../assets/images/avatars/forgotpassword.png');

type NavigationType = {
  Signin: undefined;
};

const ForgotPasswordLast = () => {
  const store = useStore();
  const {control} = useForm();
  const navigation = useNavigation<NavigationProp<NavigationType>>();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleRole = (role: string) => store.setRole(role);

  const onSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://13.127.65.203:8080/auth/send-otp',
        {
          email,
          password,
          role: store.role,
        },
      );
      console.log(response.data);
      store.setOtp(response.data.otp);
      setLoading(false);
      navigation.navigate('Signin');
    } catch (error) {
      console.log(error);
      setLoading(false);
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
              <TextSemibold
                text="ENTER NEW PASSWORD"
                fontSize={'$xl'}
                color="#E16565"
              />

              <Box height={'$5'} />
              <VStack width={'$full'} rowGap={'$4'}>
                <Input
                  bgColor="#DC9F72"
                  height={'$12'}
                  rounded={'$2xl'}
                  width={'100%'}
                  borderWidth={0}>
                  <InputSlot pl="$4">
                    <Mail size={25} color="black" />
                  </InputSlot>
                  <InputField
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    type="text"
                    fontFamily="Poppins-Regular"
                    placeholder={'Email'}
                    paddingHorizontal={'$6'}
                    placeholderTextColor={'black'}
                  />
                </Input>
                <Input
                  bgColor="#DC9F72"
                  height={'$12'}
                  rounded={'$2xl'}
                  width={'100%'}
                  borderWidth={0}>
                  <InputSlot pl="$4">
                    <Lock size={25} color="black" />
                  </InputSlot>
                  <InputField
                    autoCapitalize="none"
                    onChangeText={setPassword}
                    type="password"
                    fontFamily="Poppins-Regular"
                    placeholder={'New Password'}
                    paddingHorizontal={'$6'}
                    placeholderTextColor={'black'}
                  />
                </Input>
              </VStack>
              <Box height={'$4'} />
              <Controller
                control={control}
                name="role"
                render={({field: {onChange, value}}) => (
                  <Select
                    onValueChange={selectedRole => {
                      onChange(selectedRole);
                      handleRole(selectedRole);
                    }}>
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
                        value={value}
                      />
                      <SelectIcon as={ChevronDown} size={'xl'} color="black" />
                    </SelectTrigger>
                    <SelectPortal>
                      <SelectBackdrop />
                      <SelectContent bg="whitesmoke">
                        <SelectDragIndicatorWrapper>
                          <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        <SelectItem label="Admin" value="Admin" />
                        <SelectItem label="Doctor" value="Doctor" />
                        <SelectItem label="Teacher" value="Teacher" />
                        <SelectItem label="Parent" value="Parent" />
                        <SelectItem label="Student" value="Student" />
                      </SelectContent>
                    </SelectPortal>
                  </Select>
                )}
              />
              <Box height={'$10'} />
              <Pressable
                onPress={onSubmit}
                bgColor="#DC9F72"
                paddingHorizontal={'$8'}
                paddingVertical={'$2'}
                rounded={'$2xl'}>
                <HStack>
                  {loading && <ButtonSpinner color="black" />}
                  <TextSemibold
                    text="Confirm"
                    fontSize={'$lg'}
                    ml={loading ? '$2' : '$0'}
                  />
                </HStack>
              </Pressable>
            </Center>
          </VStack>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default ForgotPasswordLast;
