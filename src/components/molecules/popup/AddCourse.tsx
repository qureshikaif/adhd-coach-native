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
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
} from '@gluestack-ui/themed';
import {
  Select,
  SelectTrigger,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
} from '@gluestack-ui/themed';
import React, {ReactNode} from 'react';
import {ModalProps} from '../../../types/ModalProps';
import TextSemibold from '../../atoms/Text/TextSemibold';
import TextBold from '../../atoms/Text/TextBold';
import TextRegular from '../../atoms/Text/TextRegular';
import {InputField} from '@gluestack-ui/themed';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Controller, useForm} from 'react-hook-form';
import {SelectIcon} from '@gluestack-ui/themed';
import {ChevronDown} from 'lucide-react-native';
import Success from './Success';
import Error from './Error';

const AddCourseIcon = require('../../../assets/images/add-course.png');

const fields = [
  {
    name: 'Title',
    placeholder: 'Mathematics',
    validation: {
      required: 'Title is required',
    },
  },
  {
    name: 'Description',
    placeholder: 'Which topics this course contains',
    validation: {
      required: 'Description is required',
    },
  },
  // {
  //   name: 'Instructor',
  //   placeholder: 'Ahmed = 443201',
  // },
];

const AddCourse = ({showModal, setShowModal, ref}: ModalProps) => {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const refSuccess = React.useRef(null);
  const refError = React.useRef(null);

  const [error, setError] = React.useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {data: teachers} = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const {data} = await axios.get(
        'http://192.168.27.131:8080/teacher/get-teachers',
      );
      return data;
      // return data.filter((teacher: any) => teacher.full_name !== null);
    },
  });

  const onSubmit = (data: any) => {
    axios
      .post('http://192.168.27.131:8080/admin/course', {
        title: data.Title,
        description: data.Description,
        instructor: data.teacher,
      })
      .then(res => {
        console.log(res.data);
        setShowSuccess(true);
        setShowModal(false);
      })
      .catch(err => {
        console.log(err);
        setError(err.response.data.message);
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
                    <Controller
                      control={control}
                      name={field.name}
                      rules={field.validation}
                      render={({field: {onChange, onBlur, value}}) => (
                        <Input width={'$full'} bgColor="#D7E6ED">
                          <InputField
                            display="flex"
                            alignContent="center"
                            type="text"
                            fontFamily="Poppins-Regular"
                            placeholder={field.placeholder}
                            fontSize={'$xs'}
                            placeholderTextColor={'black'}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        </Input>
                      )}
                    />
                    {errors[field.name] && (
                      <TextRegular
                        text={errors[field.name]?.message as ReactNode}
                        color="red"
                        fontSize={'$xs'}
                        ml={'$1'}
                      />
                    )}
                  </VStack>
                ))}
                <TextBold text={'Instructor'} fontSize={'$xl'} color="white" />
              </VStack>
              <Controller
                control={control}
                name="teacher"
                render={({field: {onChange, value}}) => (
                  <Select
                    onValueChange={selectedTeacher => {
                      onChange(selectedTeacher);
                    }}>
                    <SelectTrigger
                      width={'$full'}
                      bgColor="#D7E6ED"
                      paddingEnd={'$3'}>
                      <SelectInput
                        paddingStart={'$5'}
                        fontFamily="Poppins-Regular"
                        fontSize={'$xs'}
                        placeholderTextColor={'black'}
                        value={String(value)}
                      />
                      <SelectIcon as={ChevronDown} size={'lg'} color="black" />
                    </SelectTrigger>
                    <SelectPortal>
                      <SelectBackdrop />
                      <SelectContent bg="whitesmoke">
                        <SelectDragIndicatorWrapper>
                          <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        {teachers &&
                          teachers.map((teacher: any, index: number) => (
                            <SelectItem
                              key={index}
                              label={teacher.id_assigned}
                              value={teacher.id_assigned}
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
                onPress={handleSubmit(onSubmit)}
                flex={1}
                bgColor="#648DA0"
                rounded={'$lg'}>
                <TextRegular text="Confirm" color="white" />
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Success
        showModal={showSuccess}
        setShowModal={setShowSuccess}
        ref={refSuccess}
        text="Course added successfully"
      />
      <Error
        showModal={showError}
        setShowModal={setShowError}
        ref={refError}
        text={error}
      />
    </Center>
  );
};

export default AddCourse;
