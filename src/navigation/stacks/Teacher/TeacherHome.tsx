import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherMain from '../../../screens/Teacher/Teachermain';

const Stack = createNativeStackNavigator();

const TeacherHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherMain" component={TeacherMain} />
    </Stack.Navigator>
  );
};

export default TeacherHome;
