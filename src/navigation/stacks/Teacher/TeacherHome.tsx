import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherProfile from '../../../screens/Teacher/TeacherProfile';

const Stack = createNativeStackNavigator();

const TeacherHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherHome"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherHome" component={TeacherProfile} />
    </Stack.Navigator>
  );
};

export default TeacherHome;
