import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentQuiz from '../../../screens/StudentModule/StudentQuiz';

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
    </Stack.Navigator>
  );
};

export default StudentQuizzes;
