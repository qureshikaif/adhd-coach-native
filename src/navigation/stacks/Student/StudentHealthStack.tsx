import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentHealth from '../../../screens/StudentModule/StudentHealth';

const Stack = createNativeStackNavigator();

const StudentHealthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudentHealth"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#FFA360',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="StudentHealth" component={StudentHealth} />
    </Stack.Navigator>
  );
};

export default StudentHealthStack;
