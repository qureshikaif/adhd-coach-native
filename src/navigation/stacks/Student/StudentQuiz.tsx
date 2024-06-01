import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentActivity from '../../../screens/StudentModule/StudentActivity';

const Stack = createNativeStackNavigator();

const StudentQuiz = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudentQuiz"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="StudentQuiz" component={StudentActivity} />
    </Stack.Navigator>
  );
};

export default StudentQuiz;
