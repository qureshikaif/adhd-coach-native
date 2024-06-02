import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherMain from '../../../screens/Teacher/TeacherMain';

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
    </Stack.Navigator>
  );
};

export default TeacherHome;
