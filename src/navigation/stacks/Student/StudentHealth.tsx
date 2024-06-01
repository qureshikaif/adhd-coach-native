import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentActivity from '../../../screens/StudentModule/StudentActivity';

const Stack = createNativeStackNavigator();

const StudentHealth = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudentHealth"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="StudentHealth" component={StudentActivity} />
    </Stack.Navigator>
  );
};

export default StudentHealth;
