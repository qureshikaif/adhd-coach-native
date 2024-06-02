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
        statusBarColor: '#F0CCCC',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherRemarks" component={TeacherRemarks} />
    </Stack.Navigator>
  );
};

export default TeacherProgressReport;
