import React from 'react';
import {  TextInput, Text } from 'react-native';
import { View, ImageBackground, ScrollView, Box, VStack, Button, HStack } from '@gluestack-ui/themed';

import TextBold from '../../components/atoms/Text/TextBold';

import StatusBarTeacher from '../../components/molecules/StatusBarTeacher';


const BackgroundImage = require('../../assets/images/TeacherChat.png');

interface QuizInputProps {
  label: string;
  placeholder: string;
}

const AddQuiz = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={BackgroundImage} style={{ flex: 1 }} >
       <StatusBarTeacher text='ADD Quiz '/>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <QuizInput label="Question:" placeholder="Enter your question here" />
          <QuizInput label="Option:" placeholder="Enter option text here" />
          <QuizInput label="Correct Answer:" placeholder="Enter correct answer here" />
          <Box height={'$10'} />
          <HStack space="2xl">
            <Button
              android_ripple={{ color: 'grey' }}
              //   onPress={() => navigation.navigate('ForgotPassword')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="Add new Question" />
            </Button>
            <Button
              android_ripple={{ color: 'grey' }}
              //   onPress={() => navigation.navigate('ForgotPassword')}
              hardShadow="3"
              size="xl"
              borderColor="black"
              bg={'#DEB5B5'}
              borderWidth={1}
              borderRadius={'$lg'}>
              <TextBold text="save" />
            </Button>
          </HStack>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const QuizInput: React.FC<QuizInputProps> = ({ label, placeholder }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 5, color: 'black' }}>
        {label}
      </Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'black', padding: 10, color: 'black', borderRadius: 15 }}
        placeholder={placeholder}
        placeholderTextColor="black"
      >
        <Text style={{ fontWeight: 'bold' }}>{placeholder}</Text>
      </TextInput>
    </View>
  );
};

export default AddQuiz;
