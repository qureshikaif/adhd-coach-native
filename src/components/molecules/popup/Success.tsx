import {
  ModalFooter,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalHeader,
  Button,
  Center,
  Image,
  HStack,
} from '@gluestack-ui/themed';
import React from 'react';
import {ModalProps} from '../../../types/ModalProps';
import TextSemibold from '../../atoms/Text/TextSemibold';
import TextRegular from '../../atoms/Text/TextRegular';

const SuccessIcon = require('../../../assets/images/icons/success.png');
// const CloseIcon = require('../../../assets/images/icons/close-white.png');

interface SuccessProps extends ModalProps {
  text?: string;
  bgColor?: string;
}

const Success = ({
  showModal,
  setShowModal,
  ref,
  text,
  bgColor,
}: SuccessProps) => {
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
        <ModalContent bgColor={bgColor ? bgColor : '#A3BACD'} rounded={'$2xl'}>
          <ModalHeader borderBottomWidth={1} borderBottomColor="#DDDDDD">
            <TextSemibold
              text="Success"
              color="white"
              fontSize="$2xl"
              w="$full"
              textAlign="center"
            />
          </ModalHeader>
          <ModalBody>
            <Center>
              <Image
                source={SuccessIcon}
                alt="Success Icon"
                w={'$1/3'}
                h={'$24'}
                marginVertical={'$4'}
                resizeMode="contain"
              />
              <TextSemibold
                text={text ? text : 'Article added successfully'}
                color="white"
                fontSize="$md"
                textAlign="center"
              />
            </Center>
          </ModalBody>
          <ModalFooter>
            <HStack space="sm">
              <Button
                flex={1}
                h={'$12'}
                bgColor="#666666"
                rounded={'$lg'}
                onPress={() => {
                  setShowModal(false);
                }}>
                <TextRegular text="Close" color="white" />
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default Success;
