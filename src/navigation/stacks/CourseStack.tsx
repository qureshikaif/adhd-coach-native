import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminMain from '../../screens/Admin/AdminMain';
import AccountManagementMain from '../../screens/Admin/AccountManagementMain';

const Stack = createNativeStackNavigator();

const CourseStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AccountManagementMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="AdminMain" component={AdminMain} />
      <Stack.Screen
        name="AccountManagementMain"
        component={AccountManagementMain}
      />
    </Stack.Navigator>
  );
};

export default CourseStack;
