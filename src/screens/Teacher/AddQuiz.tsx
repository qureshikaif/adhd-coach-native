import React from 'react';
import {TextInput, Text} from 'react-native';
import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  Button,
  VStack,
} from '@gluestack-ui/themed';

import TextBold from '../../components/atoms/Text/TextBold';

import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import Error from '../../components/molecules/popup/Error';

const BackgroundImage = require('../../assets/images/TeacherChat.png');

interface QuizInputProps {
  label: string;
  placeholder: string;
}

const AddQuiz = () => {
  const height = useBottomTabBarHeight();
  const [showError, setShowError] = React.useState(false);
  const refError = React.useRef(null);

  return (
    <View h={'$full'}>
      <ImageBackground source={BackgroundImage} h={'$full'}>
        <StatusBarTeacher text="Add Quiz" />
        <ScrollView padding={'$4'}>
          <QuizInput label="Question:" placeholder="Enter your question here" />
          <QuizInput label="Option 1:" placeholder="Enter option text here" />
          <QuizInput label="Option 2:" placeholder="Enter option text here" />
          <QuizInput label="Option 3:" placeholder="Enter option text here" />
          <QuizInput label="Option 4:" placeholder="Enter option text here" />

          <QuizInput
            label="Correct Answer:"
            placeholder="Enter correct answer here"
          />
          <Box height={'$6'} />
          <VStack space="2xl">
            <Button
              flex={1}
              android_ripple={{color: 'grey'}}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={0}
              borderRadius={'$lg'}>
              <TextBold text="Add new Question" />
            </Button>
            <Button
              onPress={() => setShowError(true)}
              flex={1}
              android_ripple={{color: 'grey'}}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Save" />
            </Button>
          </VStack>
          <Box height={height} />
        </ScrollView>
      </ImageBackground>
      <Error
        bgColor="#F0CCCC"
        setShowModal={setShowError}
        showModal={showError}
        ref={refError}
        text="Error saving quiz. Please try again."
      />
    </View>
  );
};

const QuizInput: React.FC<QuizInputProps> = ({label, placeholder}) => {
  return (
    <View mb={'$6'}>
      <TextSemibold text={label} />

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          color: 'black',
          borderRadius: 15,
        }}
        placeholder={placeholder}
        placeholderTextColor="black">
        <Text style={{fontWeight: 'bold'}}>{placeholder}</Text>
      </TextInput>
    </View>
  );
};

export default AddQuiz;
