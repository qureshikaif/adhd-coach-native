import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherCourse from '../../../screens/Teacher/TeacherCourse';
import AddQuiz from '../../../screens/Teacher/AddQuiz';
import TeacherCourseList from '../../../screens/Teacher/TeacherCourseList';

const Stack = createNativeStackNavigator();

const TeacherCourses = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherCourseList"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#F0CCCC',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherCourseList" component={TeacherCourseList} />
      <Stack.Screen name="TeacherCourse" component={TeacherCourse} />

      <Stack.Screen name="AddQuiz" component={AddQuiz} />
    </Stack.Navigator>
  );
};

export default TeacherCourses;
