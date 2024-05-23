import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AdminTabs} from './AdminTabs';
import {StudentTabs} from './StudentTabs';
import {ParentTabs} from './ParentTabs';
import {DoctorTabs} from './DoctorTabs';
import {TeacherTabs} from './TeacherTabs';
import HomeStack from './stacks/HomeStack';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <Stack.Screen name="Main" component={HomeStack} />
      ) : user.role === 'admin' ? (
        <Stack.Screen name="Admin" component={AdminTabs} />
      ) : user.role === 'student' ? (
        <Stack.Screen name="Student" component={StudentTabs} />
      ) : user.role === 'parent' ? (
        <Stack.Screen name="Parents" component={ParentTabs} />
      ) : user.role === 'doctor' ? (
        <Stack.Screen name="Doctor" component={DoctorTabs} />
      ) : (
        <Stack.Screen name="Teacher" component={TeacherTabs} />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
