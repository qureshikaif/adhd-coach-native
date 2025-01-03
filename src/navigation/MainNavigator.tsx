import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AdminTabs} from './AdminTabs';
import {StudentTabs} from './StudentTabs';
import {ParentTabs} from './ParentTabs';
import {DoctorTabs} from './DoctorTabs';
import {TeacherTabs} from './TeacherTabs';
import HomeStack from './stacks/HomeStack';
import {useStore} from '../store';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const store = useStore();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!store.isAuthenticated ? (
        <Stack.Screen name="Main" component={HomeStack} />
      ) : store.role === 'Admin' ? (
        <Stack.Screen name="Admin" component={AdminTabs} />
      ) : store.role === 'Student' ? (
        <Stack.Screen name="Student" component={StudentTabs} />
      ) : store.role === 'Parent' ? (
        <Stack.Screen name="Parents" component={ParentTabs} />
      ) : store.role === 'Doctor' ? (
        <Stack.Screen name="Doctor" component={DoctorTabs} />
      ) : (
        <Stack.Screen name="Teacher" component={TeacherTabs} />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
