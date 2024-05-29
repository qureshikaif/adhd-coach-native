import React from 'react';
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
} from '@gluestack-ui/themed';
import BackButton from '../../components/atoms/Buttons/BackButton';
import TextBold from '../../components/atoms/Text/TextBold';
import TextRegular from '../../components/atoms/Text/TextRegular';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import {colors} from '../../styles/colors';
import {Lock, Mail, User, ChevronDown} from 'lucide-react-native';
import {useStore} from '../../store';
import {NavigationProp, useNavigation} from '@react-navigation/native';

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
  const store = useStore();
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const handleRole = (role: string) => store.setRole(role);

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
              <HStack space="sm" key={index}>
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
                {/* {errors[field.title.replace(' ', '').toLowerCase()] && (
                  <TextRegular
                    color="red"
                    text={
                      errors[field.title.replace(' ', '').toLowerCase()]
                        ?.message
                    }
                  />
                )} */}
              </HStack>
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
              {isSubmitting && <ButtonSpinner color="black" />}
              <TextSemibold
                text="Sign Up"
                fontSize={'$lg'}
                ml={isSubmitting ? '$2' : '$0'}
              />
            </HStack>
          </Pressable>
          <HStack marginTop={'$3.5'}>
            <TextRegular fontSize={'$sm'} text="Already have an account?" />
            <Pressable onPress={() => navigation.navigate('Signin')}>
              <TextBold text={`${' '}Sign In`} color={colors['text-signup']} />
            </Pressable>
          </HStack>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default Signup;
