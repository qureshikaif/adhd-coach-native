import {
  Box,
  Button,
  HStack,
  ImageBackground,
  Input,
  ScrollView,
  Textarea,
  TextareaInput,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../../components/molecules/StatusBarAdmin';
import TextSemibold from '../../../components/atoms/Text/TextSemibold';
import {InputField} from '@gluestack-ui/themed';
import TextRegular from '../../../components/atoms/Text/TextRegular';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Success from '../../../components/molecules/popup/Success';

const BackgroundIcon = require('../../../assets/images/add-article-bg.png');

const fields = [
  {
    title: 'Title',
    placeholder: 'admin@adhdcoach.com',
    icon: '',
  },
  {
    title: 'Sub-title',
    placeholder: 'admin',
    icon: '',
  },

  {
    title: 'Tags/Keywords',
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

const AddNewArticle = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <ImageBackground h={'$full'} source={BackgroundIcon}>
        <StatusBarAdmin text="New Article" gap="$5" />
        <ScrollView paddingHorizontal={'$4'}>
          <Box height={'$8'} />
          {fields.map((field, index) => (
            <VStack key={index}>
              <TextSemibold text={field.title} fontSize={'$2xl'} />
              <Input
                bgColor="#D7E6ED"
                height={'$12'}
                rounded={'$lg'}
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
          {fieldstextarea.map((fieldtextarea, index) => (
            <VStack key={index}>
              <TextSemibold text={fieldtextarea.title} fontSize={'$2xl'} />
              <Textarea
                bgColor="#D7E6ED"
                height={'$32'}
                rounded={'$lg'}
                borderWidth={'$1'}
                borderColor="black"
                isReadOnly={false}
                isInvalid={false}
                isDisabled={false}>
                <TextareaInput
                  fontFamily="Poppins-Regular"
                  placeholder={fieldtextarea.placeholder}
                />
              </Textarea>
              <Box height={'$2'} />
            </VStack>
          ))}

          <Box height={'$5'} />
          <HStack space="sm">
            <Button flex={1} bgColor="#666666" rounded={'$lg'} h={'$12'}>
              <TextRegular text="Cancel" color="white" />
            </Button>
            <Button
              onPress={() => setShowModal(true)}
              flex={1}
              bgColor="#648DA0"
              rounded={'$lg'}
              h={'$12'}>
              <TextRegular text="Save" color="white" />
            </Button>
          </HStack>
          <Box height={useBottomTabBarHeight()} />
        </ScrollView>
        <Success showModal={showModal} setShowModal={setShowModal} />
      </ImageBackground>
    </>
  );
};

export default AddNewArticle;
