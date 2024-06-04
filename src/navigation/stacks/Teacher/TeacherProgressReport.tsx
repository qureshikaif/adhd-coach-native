import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherRemarks from '../../../screens/Teacher/TeacherRemarks';
import TeacherStudentList from '../../../screens/Teacher/TeacherStudentList';

const Stack = createNativeStackNavigator();

const TeacherProgressReport = () => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherStudentList"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#F0CCCC',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="TeacherStudentList" component={TeacherStudentList} />
      <Stack.Screen name="TeacherRemarks" component={TeacherRemarks} />
    </Stack.Navigator>
  );
};

export default TeacherProgressReport;
