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
  HStack,
} from '@gluestack-ui/themed';
import React from 'react';
import {ModalProps} from '../../../types/ModalProps';
import TextSemibold from '../../atoms/Text/TextSemibold';
import TextRegular from '../../atoms/Text/TextRegular';

const WarningIcon = require('../../../assets/images/icons/warning.png');
// const CloseIcon = require('../../../assets/images/icons/close-white.png');

const AccountDeletion = ({showModal, setShowModal, ref}: ModalProps) => {
  return (
    <Center h={300}>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent bgColor="#A3BACD" rounded={'$2xl'}>
          <ModalHeader borderBottomWidth={1} borderBottomColor="#DDDDDD">
            <TextSemibold
              text="Account Deletion"
              color="white"
              fontSize="$2xl"
              w="$full"
              textAlign="center"
            />
          </ModalHeader>
          <ModalBody>
            <Center>
              <Image
                source={WarningIcon}
                alt="Add Doctor Illustration"
                w={'$1/3'}
                h={'$24'}
                marginVertical={'$4'}
                resizeMode="cover"
              />
              <TextSemibold
                text="Are you sure you want to delete this user?"
                color="white"
                fontSize="$xl"
                textAlign="center"
              />
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

export default AccountDeletion;