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
import axios from 'axios';

const AddDoctorIcon = require('../../../assets/images/add-doctor.png');

const AddDoctor = ({showModal, setShowModal, ref}: ModalProps) => {
  const [doctorId, setDoctorId] = React.useState('' as string);

  const handleDoctorId = (text: string) => setDoctorId(text);

  const onSubmit = () => {
    axios
      .post('http://192.168.27.131:8080/admin/doctor', {
        doctorId,
      })
      .then(res => {
        console.log(res.data.message);
        setShowModal(false);
      })
      .catch(err => console.log(err));
  };
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
              text="Add Doctor"
              color="white"
              fontSize="$2xl"
              w="$full"
              textAlign="center"
            />
          </ModalHeader>
          <ModalBody>
            <Center>
              <Image
                source={AddDoctorIcon}
                alt="Add Doctor Illustration"
                w={'$3/5'}
                h={'$40'}
                marginVertical={'$4'}
                resizeMode="cover"
              />
              <VStack width={'$full'}>
                <TextBold text="Doctor ID" fontSize={'$xl'} color="white" />
                <Input width={'$full'} bgColor="#D7E6ED">
                  <InputField
                    onChange={e => handleDoctorId(e.nativeEvent.text)}
                    display="flex"
                    alignContent="center"
                    type="text"
                    fontFamily="Poppins-Regular"
                    placeholder={'9019254'}
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
                <TextRegular text="Cancel" color="white" />
              </Button>
              <Button
                onPress={onSubmit}
                flex={1}
                bgColor="#648DA0"
                rounded={'$lg'}>
                <TextRegular text="Confirm" color="white" />
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default AddDoctor;
