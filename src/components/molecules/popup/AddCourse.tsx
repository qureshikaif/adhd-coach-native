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
  SelectInput,
} from '@gluestack-ui/themed';
import {
  Select,
  SelectTrigger,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
} from '@gluestack-ui/themed';
import React from 'react';
import {ModalProps} from '../../../types/ModalProps';
import TextSemibold from '../../atoms/Text/TextSemibold';
import TextBold from '../../atoms/Text/TextBold';
import TextRegular from '../../atoms/Text/TextRegular';
import {InputField} from '@gluestack-ui/themed';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Controller, useForm} from 'react-hook-form';

const AddCourseIcon = require('../../../assets/images/add-course.png');

const fields = [
  {
    name: 'Title',
    placeholder: 'Mathematics',
  },
  {
    name: 'Description',
    placeholder: 'Which topics this course contains',
  },
  // {
  //   name: 'Instructor',
  //   placeholder: 'Ahmed = 443201',
  // },
];

const AddCourse = ({showModal, setShowModal, ref}: ModalProps) => {
  const {data: teachers, isLoading} = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.0.107:8080/teacher/get-teachers',
      );
      return data;
      // return data.filter((teacher: any) => teacher.full_name !== null);
    },
  });
  const {control} = useForm();
  console.log(teachers);
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
              text="Add Course"
              color="white"
              fontSize="$2xl"
              w="$full"
              textAlign="center"
            />
          </ModalHeader>
          <ModalBody>
            <Center>
              <Image
                source={AddCourseIcon}
                alt="Add Course Illustration"
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
                <TextBold text={'Instructor'} fontSize={'$xl'} color="white" />
              </VStack>
              <Controller
                control={control}
                name="teacher"
                render={({field: {onChange, value}}) => (
                  <Select onValueChange={onChange}>
                    <SelectTrigger width={'$full'} bgColor="#D7E6ED">
                      <SelectInput
                        display="flex"
                        alignContent="center"
                        fontFamily="Poppins-Regular"
                        fontSize={'$xs'}
                        placeholderTextColor={'black'}
                        value={value}
                      />
                    </SelectTrigger>
                    <SelectPortal>
                      <SelectBackdrop />
                      <SelectContent bg="whitesmoke">
                        {teachers &&
                          teachers.map((teacher: any, index: number) => (
                            <SelectItem
                              key={index}
                              label={teacher.id}
                              value={teacher.id}
                            />
                          ))}
                      </SelectContent>
                    </SelectPortal>
                  </Select>
                )}
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
                <TextRegular text="Cancel" color="white" />
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

export default AddCourse;
