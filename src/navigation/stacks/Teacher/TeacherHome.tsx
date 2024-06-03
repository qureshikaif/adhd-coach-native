import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherCourse from '../../../screens/Teacher/TeacherCourse';
import TeacherMain from '../../../screens/Teacher/Teachermain';

const Stack = createNativeStackNavigator();

const TeacherHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#F0CCCC',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherMain" component={TeacherMain} />
      <Stack.Screen name="TeacherCourse" component={TeacherCourse} />
    </Stack.Navigator>
  );
};

export default TeacherHome;
