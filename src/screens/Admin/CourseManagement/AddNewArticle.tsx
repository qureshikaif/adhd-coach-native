import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Box,
  Button,
  ButtonSpinner,
  HStack,
  ImageBackground,
  Input,
  ScrollView,
  Textarea,
  TextareaInput,
  VStack,
} from '@gluestack-ui/themed';
import StatusBarAdmin from '../../../components/molecules/StatusBarAdmin';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {InputField} from '@gluestack-ui/themed';
import TextRegular from '../../../components/atoms/Text/TextRegular';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Success from '../../../components/molecules/popup/Success';
import axios from 'axios';

const BackgroundIcon = require('../../../assets/images/add-article-bg.png');

const fields = [
  {
    title: 'Title',
    placeholder: 'admin@adhdcoach.com',
    icon: '',
  },
  {
    title: 'Subtitle',
    placeholder: 'admin',
    icon: '',
  },
  {
    title: 'Tags',
    placeholder: 'admin123',
    icon: '',
  },
];

const fieldstextarea = [
  {
    title: 'Content',
    placeholder: 'admin123',
  },
  {
    title: 'Summary',
    placeholder: 'admin123',
  },
];

const Add = () => {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);
  const [loading, setLoading] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data: any) => {
    setLoading(true);
    console.log(data);
    axios
      .post('http://13.127.65.203:8080/admin/article', {
        title: data.title,
        subtitle: data.subtitle,
        tags: data.tags,
        content: data.content,
        summary: data.summary,
      })
      .then(res => {
        console.log(res.data.message);
        setLoading(false);
        setShowModal(true);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
    setShowModal(true);
  };

  return (
    <>
      <ImageBackground h={'$full'} source={BackgroundIcon}>
        <StatusBarAdmin text="New Article" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$8'} />
          {fields.map((field, index) => (
            <VStack key={index}>
              <TextSemibold text={field.title} fontSize={'$2xl'} />
              <Controller
                name={field.title.toLowerCase().replace(' ', '_')}
                control={control}
                rules={{required: `${field.title} is required`}}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    bgColor="#D7E6ED"
                    height={'$12'}
                    rounded={'$lg'}
                    borderWidth={0.5}
                    borderColor="black">
                    <InputField
                      type="text"
                      fontFamily="Poppins-Regular"
                      placeholder={field.placeholder}
                      paddingHorizontal={'$6'}
                      placeholderTextColor={'black'}
                      fontSize="$sm"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </Input>
                )}
              />
              {/* {errors[field.title.toLowerCase().replace(' ', '_')] && (
                <TextRegular text={errors[field.title.toLowerCase().replace(' ', '_')].message} color="red" />
              )} */}
              <Box height={'$2'} />
            </VStack>
          ))}
          {fieldstextarea.map((fieldtextarea, index) => (
            <VStack key={index}>
              <TextSemibold text={fieldtextarea.title} fontSize={'$2xl'} />
              <Controller
                name={fieldtextarea.title.toLowerCase().replace(' ', '_')}
                control={control}
                rules={{required: `${fieldtextarea.title} is required`}}
                render={({field: {onChange, onBlur, value}}) => (
                  <Textarea
                    bgColor="#D7E6ED"
                    height={'$32'}
                    rounded={'$lg'}
                    borderWidth={0.5}
                    borderColor="black"
                    isReadOnly={false}
                    isInvalid={
                      !!errors[
                        fieldtextarea.title.toLowerCase().replace(' ', '_')
                      ]
                    }
                    isDisabled={false}>
                    <TextareaInput
                      fontFamily="Poppins-Regular"
                      placeholder={fieldtextarea.placeholder}
                      fontSize={'$sm'}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </Textarea>
                )}
              />
              {/* {errors[fieldtextarea.title.toLowerCase().replace(' ', '_')] && (
                <TextRegular text={errors[fieldtextarea.title.toLowerCase().replace(' ', '_')].message} color="red" />
              )} */}
              <Box height={'$2'} />
            </VStack>
          ))}

          <Box height={'$5'} />
          <HStack space="sm">
            <Button flex={1} bgColor="#666666" rounded={'$lg'} h={'$12'}>
              <TextRegular text="Cancel" color="white" />
            </Button>
            <Button
              onPress={handleSubmit(onSubmit)}
              flex={1}
              bgColor="#648DA0"
              rounded={'$lg'}
              h={'$12'}>
              <HStack>
                {loading && <ButtonSpinner color="white" />}
                <TextRegular
                  text="Save"
                  color="white"
                  ml={loading ? '$2' : '$0'}
                />
              </HStack>
            </Button>
          </HStack>
          <Box height={useBottomTabBarHeight()} />
        </ScrollView>
        <Success showModal={showModal} setShowModal={setShowModal} ref={ref} />
      </ImageBackground>
    </>
  );
};

export default Add;
