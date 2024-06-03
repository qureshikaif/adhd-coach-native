import {
  View,
  ImageBackground,
  ScrollView,
  Box,
  HStack,
  VStack,
  Pressable,
} from '@gluestack-ui/themed';
import React from 'react';
import TextSemibold from '../../components/atoms/Text/TextSemibold';
import StatusBarStudent from '../../components/molecules/StatusBarStudent';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const BackgroundImage = require('../../assets/images/Stud-course-bg.png');

export type Question = {
  question_id: number;
  question: string;
  option_1: string;
  option_2: string;
  option_3: string;
  option_4: string;
  answer: string;
};

type NavigationType = {
  EnglishCourses: undefined;
  AttemptQuiz: {quiz: Question[]};
};

/* Change images path */
const StudentQuiz = () => {
  const navigation = useNavigation<NavigationProp<NavigationType>>();
  const {
    data: quizzes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['quizzes'],
    queryFn: async () => {
      const {data} = await axios.get('http://192.168.27.131:8080/api/quizzes');
      return data.quizzes;
    },
  });

  console.log(quizzes);

  if (isLoading) {
    return <Loading bgImage={BackgroundImage} />;
  }

  if (isError) {
    return <TextSemibold text="An error occured while fetching data" />;
  }
  return (
    <View height={'$full'}>
      <ImageBackground source={BackgroundImage} h="$full">
        <Box />
        <StatusBarStudent text="Quizzes" bgColor="#FFA360" textColor="black" />
        <ScrollView
          paddingHorizontal={'$10'}
          marginRight={'$16'}
          marginLeft={'-$16'}>
          <Box height={'$10'} />
          <Box height={'$10'} />

          {quizzes.map((quiz: any, index: number) => (
            <VStack>
              <Pressable
                onPress={() => navigation.navigate('EnglishCourses')}
                android_ripple={{color: 'gray'}}
                key={index}
                bgColor="#FFA360"
                height={60}
                alignItems="center"
                padding={'$1'}
                borderRadius={'$3xl'}
                borderWidth={'$2'}
                marginRight={'$16'}>
                <TextSemibold
                  text={quiz.quiz_title ? quiz.quiz_title : 'No Quiz Found'}
                  fontSize={'$2xl'}
                  marginLeft={'$12'}
                />
              </Pressable>
              <Box height="$10" />
            </VStack>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default StudentQuiz;
