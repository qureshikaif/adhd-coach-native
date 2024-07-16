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
  Select,
  SelectTrigger,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  ButtonSpinner,
  ScrollView,
} from '@gluestack-ui/themed';
import BackButton from '../../components/atoms/Buttons/BackButton';
import TextBold from '../../components/atoms/Text/TextBold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {colors} from '../../styles/colors';
import {Lock, Mail, User, ChevronDown, Key, Star} from 'lucide-react-native';
import {useStore} from '../../store';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Error from '../../components/molecules/popup/Error';
import Success from '../../components/molecules/popup/Success';

const BackgroundImage = require('../../assets/images/signup-bg.png');
const Avatar = require('../../assets/images/avatars/signup.png');

type NavigationType = {
  Signin: undefined;
};

const fields = [
  {
    title: 'Full name',
    icon: User,
    type: 'text',
    validation: {required: 'Full name is required'},
  },
  {
    title: 'Email',
    icon: Mail,
    type: 'text',
    validation: {
      required: 'Email is required',
      pattern: {value: /^\S+@\S+$/i, message: 'Invalid email address'},
    },
  },
  {
    title: 'Password',
    icon: Lock,
    type: 'password',
    validation: {required: 'Password is required'},
  },
  {
    title: 'Confirm password',
    icon: Lock,
    type: 'password',
    validation: {
      required: 'Confirm password is required',
      // validate: (value: string, context: any) =>
      //   value === context.getValues().password || 'Passwords do not match',
    },
  },
];

const Signup = () => {
  const [childId, setChildId] = React.useState('Loading...');
  const [showError, setShowError] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  // const refError = React.useRef(null);
  // const refSuccess = React.useRef(null);

  const store = useStore();
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const handleRole = (role: string) => store.setRole(role);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  const onSubmit = (data: any) => {
    setLoading(true);
    console.log(data);
    let id = '';
    let specialization = '';

    if (
      store.role === 'Doctor' ||
      store.role === 'Teacher' ||
      store.role === 'Parent'
    ) {
      id = data.id;
    }

    if (store.role === 'Doctor') {
      specialization = data.specialization;
    }

    axios
      .post('http://192.168.27.143:8080/auth/signup', {
        fullName: data.fullname,
        email: data.email,
        password: data.password,
        role: data.role,
        id,
        specialization,
      })
      .then(res => {
        console.log('Response Data:', res.data);

        if (store.role === 'Student') {
          setChildId(res.data.id_assigned);
          setShowSuccess(true);
        } else {
          setChildId('Loading...');
          setShowSuccess(true);
        }
        setLoading(false);
        navigation.navigate('Signin');
      })
      .catch(err => {
        if (err.response) {
          console.log('Error Response Data:', err.response.data);
          setError(err.response.data.message);
          setShowError(true);
          setLoading(false);
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
        <ScrollView showsVerticalScrollIndicator={false}>
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
              <TextBold text="Sign Up" paddingRight={'$8'} fontSize={'$3xl'} />
              <View />
            </HStack>
            <Image source={Avatar} alt="Avatar" size={'lg'} />
            <TextRegular
              fontSize={'$4xl'}
              text="Create an account"
              fontStyle="italic"
            />

            <Box height={'$5'} />
            <VStack width={'$full'} rowGap={'$3'}>
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
                            <field.icon size={25} color="black" />
                          </InputSlot>
                          <InputField
                            autoCapitalize={
                              field.title === 'Email' ? 'none' : 'words'
                            }
                            type={field.type as 'text' | 'password'}
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
              {(store.role === 'Doctor' ||
                store.role === 'Teacher' ||
                store.role === 'Parent') && (
                <HStack space="sm">
                  <Controller
                    control={control}
                    name={'id'}
                    rules={{required: `${store.role} ID is required`}}
                    render={({field: {onChange, onBlur, value}}) => (
                      <Input
                        bgColor="#DC9F72"
                        height={'$12'}
                        rounded={'$2xl'}
                        width={'$full'}
                        borderWidth={0}>
                        <InputSlot pl="$4">
                          <Key size={25} color={'black'} />
                        </InputSlot>
                        <InputField
                          type="text"
                          fontFamily="Poppins-Regular"
                          placeholder={
                            store.role === 'Doctor'
                              ? 'Doctor ID'
                              : store.role === 'Teacher'
                              ? 'Teacher ID'
                              : 'Children ID'
                          }
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
              )}

              {store.role === 'Doctor' && (
                <HStack space="sm">
                  <Controller
                    control={control}
                    name={'specialization'}
                    rules={{required: 'Specialization is required'}}
                    render={({field: {onChange, onBlur, value}}) => (
                      <Input
                        bgColor="#DC9F72"
                        height={'$12'}
                        rounded={'$2xl'}
                        width={'$full'}
                        borderWidth={0}>
                        <InputSlot pl="$4">
                          <Star size={25} color={'black'} />
                        </InputSlot>
                        <InputField
                          type="text"
                          fontFamily="Poppins-Regular"
                          placeholder="Specialization"
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
              )}

              <TextRegular
                fontSize={'$xs'}
                paddingHorizontal={'$2'}
                text="By Signing up, you agree to our Privacy Policy and Terms of Service."
              />
            </VStack>
            <Box height={'$5'} />
            <Pressable
              bgColor="#DC9F72"
              paddingHorizontal={'$8'}
              paddingVertical={'$2'}
              rounded={'$2xl'}
              onPress={handleSubmit(onSubmit)}>
              <HStack>
                {loading && <ButtonSpinner color="black" />}
                <TextSemibold
                  text="Sign Up"
                  fontSize={'$lg'}
                  ml={loading ? '$2' : '$0'}
                />
              </HStack>
            </Pressable>
            <HStack marginTop={'$3.5'}>
              <TextRegular fontSize={'$sm'} text="Already have an account?" />
              <Pressable onPress={() => navigation.navigate('Signin')}>
                <TextBold
                  text={`${' '}Sign In`}
                  color={colors['text-signup']}
                />
              </Pressable>
            </HStack>
          </Center>
          <Box height={'$5'} />
        </ScrollView>
      </ImageBackground>
      <Error
        // ref={refError}
        bgColor="#DC9F72"
        text={error}
        showModal={showError}
        setShowModal={setShowError}
      />
      <Success
        // ref={refSuccess}
        bgColor="#DC9F72"
        text={`Account created successfully${
          childId !== 'Loading...' ? `. Your Child ID is ${childId}` : ''
        }`}
        showModal={showSuccess}
        setShowModal={setShowSuccess}
      />
    </View>
  );
};

export default Signup;
