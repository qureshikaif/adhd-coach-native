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

const AddTeacherIcon = require('../../../assets/images/add-teacher.png');
// const CloseIcon = require('../../../assets/images/icons/close-white.png');

const AddTeacher = ({showModal, setShowModal, ref}: ModalProps) => {
  return (
    <Center>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="lg"
        finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent bgColor="#A3BACD" rounded="$2xl">
          <ModalHeader borderBottomWidth={1} borderBottomColor="#DDDDDD">
            <TextSemibold
              text="Add Teacher"
              color="white"
              fontSize="$2xl"
              w="$full"
              textAlign="center"
            />
          </ModalHeader>
          <ModalBody>
            <Center>
              <Image
                source={AddTeacherIcon}
                alt="Add Teacher Illustration"
                w={'$3/5'}
                h={'$40'}
                marginVertical={'$4'}
                resizeMode="cover"
              />
              <VStack width={'$full'}>
                <TextBold text="Teacher ID" fontSize={'$xl'} color="white" />
                <Input width={'$full'} bgColor="#D7E6ED">
                  <InputField
                    display="flex"
                    alignContent="center"
                    type="text"
                    fontFamily="Poppins-Regular"
                    placeholder={'#29019254'}
                    fontSize={'$xs'}
                    placeholderTextColor={'black'}
                  />
                </Input>
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

export default AddTeacher;
