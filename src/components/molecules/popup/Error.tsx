import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalHeader,
  Center,
  Image,
} from '@gluestack-ui/themed';
import React from 'react';
import {ModalProps} from '../../../types/ModalProps';
import TextSemibold from '../../atoms/Text/TextSemibold';
import TextRegular from '../../atoms/Text/TextRegular';

const WarningIcon = require('../../../assets/images/icons/warning.png');

interface ErrorProps extends ModalProps {
  text?: string;
  bgColor?: string;
  heading?: string;
}

const Error = ({
  showModal,
  setShowModal,
  ref,
  text,
  bgColor,
  heading,
}: ErrorProps) => {
  return (
    <Center>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="sm"
        finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent bgColor={bgColor ? bgColor : '#A3BACD'} rounded={'$2xl'}>
          <ModalHeader borderBottomWidth={1} borderBottomColor="#DDDDDD">
            <TextSemibold
              text={heading ? heading : 'Error'}
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
                alt="Warning Icon"
                w={'$1/3'}
                h={'$24'}
                marginVertical={'$4'}
                resizeMode="contain"
              />
              <TextRegular
                text={text}
                color="white"
                fontSize="$lg"
                textAlign="center"
              />
            </Center>
          </ModalBody>
          {/* <ModalFooter>
            <HStack space="sm">
              <Button
                flex={1}
                bgColor="#666666"
                rounded={'$lg'}
                onPress={() => {
                  setShowModal(false);
                }}>
                <TextRegular text="Close" color="white" />
              </Button>
            </HStack>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default Error;
