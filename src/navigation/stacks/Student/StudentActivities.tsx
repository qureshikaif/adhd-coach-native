import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentActivity from '../../../screens/StudentModule/StudentActivity';
import TicTacToeGame from '../../../screens/StudentModule/TicTacToeGame';
import EnglishCourses from '../../../screens/StudentModule/EnglishCourses';
import MathsCourses from '../../../screens/StudentModule/MathsCourses';

const Stack = createNativeStackNavigator();

const StudentActivities = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudentActivity"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#FFA360',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="StudentActivity" component={StudentActivity} />
      <Stack.Screen name="TicTacToe" component={TicTacToeGame} />
      <Stack.Screen name="EnglishCourses" component={EnglishCourses} />
      <Stack.Screen name="MathsCourses" component={MathsCourses} />
    </Stack.Navigator>
  );
};

export default StudentActivities;
