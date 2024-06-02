import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherCourse from '../../../screens/Teacher/TeacherCourse';
import AddQuiz from '../../../screens/Teacher/AddQuiz';

const Stack = createNativeStackNavigator();

const TeacherCourses = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherCourse"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#F0CCCC',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherCourse" component={TeacherCourse} />
      <Stack.Screen name="AddQuiz" component={AddQuiz} />
    </Stack.Navigator>
  );
};

export default TeacherCourses;
