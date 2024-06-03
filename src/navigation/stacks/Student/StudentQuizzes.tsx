import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentQuiz from '../../../screens/StudentModule/StudentQuiz';
import StudentAttemptQuiz from '../../../screens/StudentModule/StudentAttemptQuiz';
import EnglishCourses from '../../../screens/StudentModule/EnglishCourses';

const Stack = createNativeStackNavigator();

const StudentQuizzes = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudentQuiz"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#FFA360',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="StudentQuiz" component={StudentQuiz} />
      <Stack.Screen name="AttemptQuiz" component={StudentAttemptQuiz} />
      <Stack.Screen name="EnglishCourses" component={EnglishCourses} />
    </Stack.Navigator>
  );
};

export default StudentQuizzes;
