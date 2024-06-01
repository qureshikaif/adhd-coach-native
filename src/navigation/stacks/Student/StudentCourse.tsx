import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentCourses from '../../../screens/StudentModule/StudentCourses';

const Stack = createNativeStackNavigator();

const StudentCourse = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudentCourses"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#FFA360',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="StudentCourses" component={StudentCourses} />
    </Stack.Navigator>
  );
};

export default StudentCourse;
