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
import {User} from '../../../types/User';

const UserImage = require('../../../assets/images/user-image.png');

interface ProfilePreviewProps extends ModalProps {
  user?: User;
}

const ProfilePreview = ({
  showModal,
  setShowModal,
  ref,
  user,
}: ProfilePreviewProps) => {
  const fields = [
    {
      name: 'User ID',
      placeholder: user?.id_assigned,
    },
    {
      name: 'Email',
      placeholder: user?.email,
    },
    {
      name: 'Role',
      placeholder: user?.role,
    },
  ];

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
              text={user?.full_name}
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
                        placeholder={String(field.placeholder)}
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
                <TextRegular text="Close" color="white" />
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default ProfilePreview;
