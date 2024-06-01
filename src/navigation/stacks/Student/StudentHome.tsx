import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentMain from '../../../screens/StudentModule/StudentMain';

const Stack = createNativeStackNavigator();

const StudentHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudentMain"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#A3BACD',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="StudentMain" component={StudentMain} />
    </Stack.Navigator>
  );
};

export default StudentHome;
