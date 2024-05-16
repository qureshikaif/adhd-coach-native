import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminMain from '../../screens/Admin/AdminMain';

const Stack = createNativeStackNavigator();

const CourseStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="AdminMain" component={AdminMain} />
    </Stack.Navigator>
  );
};

export default CourseStack;
