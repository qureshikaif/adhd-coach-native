import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherRemarks from '../../../screens/Teacher/TeacherRemarks';

const Stack = createNativeStackNavigator();

const TeacherProgressReport = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherRemarks"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherRemarks" component={TeacherRemarks} />
    </Stack.Navigator>
  );
};

export default TeacherProgressReport;
