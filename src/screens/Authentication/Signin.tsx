import React, {ReactNode} from 'react';
import {useForm, Controller} from 'react-hook-form';
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
import BackButton from '../../components/atoms/Buttons/BackButton';
import TextBold from '../../components/atoms/Text/TextBold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {colors} from '../../styles/colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ChevronDown, Lock, Mail, User} from 'lucide-react-native';
import {useStore} from '../../store';
import axios from 'axios';
import Error from '../../components/molecules/popup/Error';

const BackgroundImage = require('../../assets/images/signup-bg.png');
const Avatar = require('../../assets/images/avatars/login.png');

const fields = [
  {
    title: 'Email',
    icon: Mail,
    validation: {
      required: 'Email is required',
      pattern: {value: /^\S+@\S+$/i, message: 'Invalid email address'},
    },
  },
  {
    title: 'Password',
    icon: Lock,
    validation: {required: 'Password is required'},
  },
];

type NavigationType = {
  Signup: undefined;
  ForgotPassword: undefined;
};

const Signin = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [error, setError] = React.useState('');
  const ref = React.useRef(null);
  const store = useStore();
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const handleRole = (role: string) => store.setRole(role);

  const onSubmit = async (data: any) => {
    console.log(data);

    await axios
      .post('http://192.168.0.107:8080/auth/signin', {
        email: data.email,
        password: data.password,
        role: data.role,
      })
      .then(res => {
        console.log(res.data);
        store.setAuthenticated(true);
      })
      .catch(err => {
        if (err.response) {
          console.log('Error Response Data:', err.response.data);
          setError(err.response.data.message);
          setShowModal(true);
        } else if (err.request) {
          console.log('Error Request:', err.request);
        } else {
          console.log('Error Message:', err.message);
        }
        console.log('Error Config:', err.config);
      });
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
              <VStack key={index}>
                <HStack space="sm">
                  <Controller
                    control={control}
                    name={field.title.replace(' ', '').toLowerCase()}
                    rules={field.validation}
                    render={({field: {onChange, onBlur, value}}) => (
                      <Input
                        bgColor="#DC9F72"
                        height={'$12'}
                        rounded={'$2xl'}
                        width={'$full'}
                        borderWidth={0}
                        isInvalid={Boolean(
                          errors[field.title.replace(' ', '').toLowerCase()],
                        )}>
                        <InputSlot pl="$4">
                          <field.icon size={25} color={'black'} />
                        </InputSlot>
                        <InputField
                          autoCapitalize={
                            field.title === 'Email' ? 'none' : 'sentences'
                          }
                          type={
                            field.title === 'Password' ? 'password' : 'text'
                          }
                          fontFamily="Poppins-Regular"
                          placeholder={field.title}
                          paddingHorizontal={'$6'}
                          placeholderTextColor={'black'}
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      </Input>
                    )}
                  />
                </HStack>
                {errors[field.title.replace(' ', '').toLowerCase()] && (
                  <TextRegular
                    text={
                      errors[field.title.replace(' ', '').toLowerCase()]
                        ?.message as ReactNode
                    }
                    fontSize={'$xs'}
                    ml={'$1'}
                    color="red"
                  />
                )}
              </VStack>
            ))}
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
            onPress={handleSubmit(onSubmit)}
            bgColor="#DC9F72"
            paddingHorizontal={'$8'}
            paddingVertical={'$2'}
            rounded={'$2xl'}>
            <TextSemibold text="Log In" fontSize={'$lg'} />
          </Pressable>
        </Center>
      </ImageBackground>
      <Error
        bgColor="#DC9F72"
        text={error}
        showModal={showModal}
        setShowModal={setShowModal}
        ref={ref}
      />
    </View>
  );
};

export default Signin;
