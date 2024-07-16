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
  ButtonSpinner,
  Box,
} from '@gluestack-ui/themed';
import React from 'react';
import {ModalProps} from '../../../types/ModalProps';
import TextSemibold from '../../atoms/Text/TextSemibold';
import TextBold from '../../atoms/Text/TextBold';
import TextRegular from '../../atoms/Text/TextRegular';
import {InputField} from '@gluestack-ui/themed';
import axios from 'axios';
import Error from './Error';
import Success from './Success';

const AddDoctorIcon = require('../../../assets/images/add-doctor.png');

const AddDoctor = ({showModal, setShowModal, ref}: ModalProps) => {
  const [doctorId, setDoctorId] = React.useState('' as string);
  const [email, setEmail] = React.useState('' as string);

  const [loading, setLoading] = React.useState(false);

  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const handleDoctorId = (text: string) => setDoctorId(text);
  const handleEmail = (text: string) => setEmail(text);

  const onSubmit = () => {
    setLoading(true);
    axios
      .post('http://192.168.27.143:8080/admin/doctor', {
        doctorId,
        email,
      })
      .then(res => {
        console.log(res.data.message);
        setLoading(false);
        setShowModal(false);
        setShowSuccess(true);
      })
      .catch(err => {
        console.log(err.response.data);
        setLoading(false);
        setShowModal(false);
        setShowError(true);
      });
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
                <Box height={'$4'} />
                <TextBold text="Doctor Email" fontSize={'$xl'} color="white" />
                <Input width={'$full'} bgColor="#D7E6ED">
                  <InputField
                    autoCapitalize="none"
                    onChange={e => handleEmail(e.nativeEvent.text)}
                    display="flex"
                    alignContent="center"
                    type="text"
                    fontFamily="Poppins-Regular"
                    placeholder={'doctor@adhd.com'}
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
                <HStack>
                  {loading && <ButtonSpinner color="white" />}
                  <TextRegular
                    text="Confirm"
                    color="white"
                    ml={loading ? '$2' : '$0'}
                  />
                </HStack>
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Error
        showModal={showError}
        setShowModal={setShowError}
        text="An error occured while adding doctor"
      />
      <Success
        showModal={showSuccess}
        setShowModal={setShowSuccess}
        text="Doctor added successfully"
      />
    </Center>
  );
};

export default AddDoctor;
