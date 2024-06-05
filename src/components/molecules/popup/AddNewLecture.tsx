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
} from '@gluestack-ui/themed';
import React from 'react';
import {ModalProps} from '../../../types/ModalProps';
import TextSemibold from '../../atoms/Text/TextSemibold';
import TextBold from '../../atoms/Text/TextBold';
import TextRegular from '../../atoms/Text/TextRegular';
import {InputField} from '@gluestack-ui/themed';
import axios from 'axios';
import {useStore} from '../../../store';

const AddCourseIcon = require('../../../assets/images/add-course.png');

interface AddNewLectureProps extends ModalProps {
  courseId: number;
}

const AddNewLecture = ({
  showModal,
  setShowModal,
  courseId,
}: AddNewLectureProps) => {
  const [lecture, setLecture] = React.useState('' as string);
  const [loading, setLoading] = React.useState(false);
  const store = useStore();

  const handleLecture = (text: string) => setLecture(text);

  const onSubmit = () => {
    setLoading(true);
    axios
      .post('http://192.168.0.107:8080/teacher/add-lecture', {
        lecture,
        courseId,
        instructorId: store.user?.user.id_assigned,
      })
      .then(res => {
        console.log(res.data.message);
        setLoading(false);
        setShowModal(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <Center>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="lg">
        <ModalBackdrop />
        <ModalContent bgColor="#C2A3A3" rounded="$2xl">
          <ModalHeader borderBottomWidth={1} borderBottomColor="#DDDDDD">
            <TextSemibold
              text="Add Lecture"
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
                w={'$3/5'}
                h={'$40'}
                marginVertical={'$4'}
                resizeMode="cover"
              />
              <VStack width={'$full'}>
                <TextBold text="Lecture Link" fontSize={'$xl'} color="white" />
                <Input width={'$full'} bgColor="#F0CCCC">
                  <InputField
                    onChange={e => handleLecture(e.nativeEvent.text)}
                    display="flex"
                    alignContent="center"
                    type="text"
                    fontFamily="Poppins-Regular"
                    placeholder={'https://lecturelink.com'}
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
                bgColor="#7D6666"
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
    </Center>
  );
};

export default AddNewLecture;
