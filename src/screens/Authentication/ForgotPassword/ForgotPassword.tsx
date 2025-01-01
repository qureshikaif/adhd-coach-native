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
  Select,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  InputSlot,
  ButtonSpinner,
} from '@gluestack-ui/themed';
import BackButton from '../../../components/atoms/Buttons/BackButton';
import TextRegular from '../../../components/atoms/Text/TextRegular';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SelectBackdrop} from '@gluestack-ui/themed';
import {User, ChevronDown, Mail} from 'lucide-react-native';
import {Controller, useForm} from 'react-hook-form';
import {useStore} from '../../../store';
import axios from 'axios';

const BackgroundImage = require('../../../assets/images/signup-bg.png');
const Avatar = require('../../../assets/images/avatars/forgotpassword.png');

type NavigationType = {
  ForgotPasswordVerify: undefined;
};

const ForgotPassword = () => {
  const {control} = useForm();
  const store = useStore();
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleRole = (role: string) => store.setRole(role);

  const onSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://adhd-coach-backend.vercel.app/auth/send-otp',
        {
          email,
          role: store.role,
        },
      );
      console.log(response.data);
      store.setOtp(response.data.otp);
      setLoading(false);
      navigation.navigate('ForgotPasswordVerify');
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
                text="ENTER YOU EMAIL ADDRESS"
                fontSize={'$xl'}
                color="#E16565"
              />
              <TextRegular
                text="Enter email address that is associated with your account"
                fontSize={'$sm'}
                paddingHorizontal={'$4'}
                textAlign="center"
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
                        <SelectIcon
                          as={ChevronDown}
                          size={'xl'}
                          color="black"
                        />
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
              </VStack>
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
                    text="Recover"
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

export default ForgotPassword;
