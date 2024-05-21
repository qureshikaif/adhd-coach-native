import {
  ModalFooter,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalHeader,
  Button,
  ButtonText,
  Center,
  Image,
  VStack,
  HStack,
  Input,
} from '@gluestack-ui/themed';
import React from 'react';
import {ModalProps} from '../../../types/ModalProps';
import TextSemibold from '../../atoms/Text/TextSemibold';
import TextBold from '../../atoms/Text/TextBold';
import TextRegular from '../../atoms/Text/TextRegular';
import {InputField} from '@gluestack-ui/themed';

const UserImage = require('../../../assets/images/user-image.png');
// const CloseIcon = require('../../../assets/images/icons/close-white.png');

const fields = [
  {
    name: 'User ID',
    placeholder: '#29019254',
  },
  {
    name: 'Email',
    placeholder: 'johndoe@gmail.com',
  },
  {
    name: 'Role',
    placeholder: 'Teacher',
  },
];

const ProfilePreview = ({showModal, setShowModal, ref}: ModalProps) => {
  return (
    <Center>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent bgColor="#A3BACD" rounded="$2xl">
          <ModalHeader borderBottomWidth={1} borderBottomColor="#DDDDDD">
            <TextSemibold
              text="Kaif Qureshi"
              color="white"
              fontSize="$2xl"
              w="$full"
              textAlign="center"
            />
          </ModalHeader>
          <ModalBody>
            <Center>
              <Image
                source={UserImage}
                alt="Add Teacher Illustration"
                w={'$3/6'}
                h={'$32'}
                marginVertical={'$4'}
                resizeMode="contain"
              />
              <VStack width={'$full'} space="md">
                {fields.map((field, index) => (
                  <VStack key={index}>
                    <TextBold
                      text={field.name}
                      fontSize={'$xl'}
                      color="white"
                    />
                    <Input width={'$full'} bgColor="#D7E6ED">
                      <InputField
                        display="flex"
                        alignContent="center"
                        type="text"
                        fontFamily="Poppins-Regular"
                        placeholder={field.placeholder}
                        fontSize={'$xs'}
                        placeholderTextColor={'black'}
                      />
                    </Input>
                  </VStack>
                ))}
              </VStack>
            </Center>
          </ModalBody>
          <ModalFooter>
            <HStack space="sm">
              <Button
                flex={1}
                bgColor="#666666"
                rounded={'$lg'}
                onPress={() => {
                  setShowModal(false);
                }}>
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                flex={1}
                bgColor="#648DA0"
                rounded={'$lg'}
                onPress={() => {
                  setShowModal(false);
                }}>
                <TextRegular text="Confirm" color="white" />
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default ProfilePreview;
